import getBlog from "@/actions/get-blog";
import getBlogs from "@/actions/get-blogs";
import getCarousel from "@/actions/get-carousel";
import BlogCard from "@/components/blog-card";
import { LandingCarousel } from "@/components/carousel";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const carousel = await getCarousel();
  const featuredBlogs = await getBlogs({ isFeatured: true });
  const messagefromprinciple = await getBlog("ed501f36-7872-41ce-9ea5-76958ad1201f");
  return (
    <div className="container space-y-10 py-5 min-h-[calc(100vh-198px)]">
      {carousel && <LandingCarousel carousels={carousel} />}
      <div className="container block gap-x-10 lg:grid grid-cols-2">
        <div className="bg-gray-200 p-5 rounded-lg">
          <h1 className="text-2xl text-primary font-bold">Welcome To Sarasoti Namuna</h1>
          <p className="font-medium mb-10">A Message from Principal</p>
          {messagefromprinciple && (
            <div className="relative">
              <Markdown className="h-[260px] overflow-hidden" remarkPlugins={[remarkGfm]}>
                {messagefromprinciple.content}
              </Markdown>
              <div className="absolute bg-gray-200 bottom-0 right-0 px-2">...</div>
            </div>
          )}
          <Button className="mt-10">Read more</Button>
        </div>
        <div className="mt-10 lg:mt-0">
          <h1 className="text-lg font-bold">Featured Posts</h1>
          {featuredBlogs &&
            featuredBlogs.map((blog, index) => <BlogCard key={blog.title} blog={blog} />)}
        </div>
      </div>
    </div>
  );
}
