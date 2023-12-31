import getBillboard from "@/actions/get-billboard";
import getBlogs from "@/actions/get-blogs";
import getCategory from "@/actions/get-category";
import getSubCategories from "@/actions/get-subcategories";
import BlogCard from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC } from "react";
import Filter from "../../../../components/filter";

interface CategoryPageProp {
  params: { categoryId: string };
  searchParams: {
    subcategoryId: string;
  };
}

const Category: FC<CategoryPageProp> = async ({ params, searchParams }) => {
  const blogs = await getBlogs({
    categoryId: params.categoryId,
    subcategoryId: searchParams.subcategoryId,
  });

  const category = await getCategory(params.categoryId);

  return (
    <div>
      <div className="w-full relative">
        <Image
          className="h-80 lg:h-72 object-cover"
          src={category.billboard.imageUrl}
          alt={category.billboard.label}
          width={1920}
          height={1080}
        />
        <div className="w-full space-y-5 h-full absolute top-0 left-0 text-center bg-black/70 bg-blend-overlay flex flex-col justify-center items-center px-5 lg:px-10 text-white">
          <h1 className="text-3xl tracking-wide font-bold">{category.billboard.label}</h1>
          <p className="lg:w-[50%] font-medium text-gray-100">{category.billboard.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap lg:gap-x-16 container mt-10">
        <div>
          <Filter valueKey="subcategoryId" name="Category" data={category.subCategory} />
        </div>

        <div className="flex flex-wrap lg:gap-x-10 gap-y-5">
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              return <BlogCard blog={blog} key={blog.id} />;
            })
          ) : (
            <p className="text-center w-full italic">No {category.name} Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
