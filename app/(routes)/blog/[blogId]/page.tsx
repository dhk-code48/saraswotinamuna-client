import getBlog from "@/actions/get-blog";
import AuthorProfile from "@/components/author";
import { Calendar } from "lucide-react";
import moment from "moment";
import React, { FC } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import getBlogs from "@/actions/get-blogs";
import BlogCard from "@/components/blog-card";
import { Metadata, ResolvingMetadata } from "next";
import { Billboard, Blog } from "@/types";

interface BlogPageProps {
  params: {
    blogId: string;
    categoryId: string;
  };
}

export async function generateMetadata(
  { params }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.categoryId;

  // fetch data
  const blog: Blog = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.blogId}`).then(
    (res) => res.json()
  );

  const billboard: Billboard = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/billboards/${blog.category.billboardId}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title + " || Saraswoti Namuna Secondary School",
    twitter: {
      title: "Saraswoti Namuna Secondary School",
      description: blog.headline,
      images: [
        {
          protocol: "https",
          pathname: "/**",
          hostname: "res.cloudinary.com",
          url: billboard.imageUrl,
          alt: billboard.label,
        },
        ...previousImages,
      ],
    },
    openGraph: {
      siteName: blog.title + " || Saraswoti Namuna Secondary School",
      type: "website",
      description: blog.headline,
      countryName: "Nepal",
      images: [
        {
          protocol: "https",
          pathname: "/**",
          hostname: "res.cloudinary.com",
          url: billboard.imageUrl,
          alt: billboard.label,
        },
        ...previousImages,
      ],
    },
  };
}

const BlogPage: FC<BlogPageProps> = async ({ params }) => {
  const blog = await getBlog(params.blogId);
  const relatedBlogs = await getBlogs({ categoryId: blog.categoryId });
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-10 px-10 lg:px-0 prose">
        <h1 className="text-3xl font-bold mb-5"> {blog.title}</h1>
        <Markdown>{blog.headline}</Markdown>
        <br />
        <div className="flex justify-between lg:justify-start lg:gap-x-10 mb-10 items-center">
          <AuthorProfile author={blog.author} />
          <div className="flex capitalize items-center gap-x-2">
            <Calendar size={24} />
            {moment(blog.createdAt).fromNow()}
          </div>
        </div>
        <Markdown className="text-justify" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {blog.content}
        </Markdown>
        <hr />
        <div className="prose">
          <h3>Related Post</h3>
          <div className="flex lg:flex-row flex-col gap-x-5 gap-y-10">
            {relatedBlogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.authorId} blog={blog} className="w-[300px]" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
