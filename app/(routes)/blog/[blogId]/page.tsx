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

interface BlogPageProps {
  params: {
    blogId: string;
    categoryId: string;
  };
}

const Blog: FC<BlogPageProps> = async ({ params }) => {
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

export default Blog;
