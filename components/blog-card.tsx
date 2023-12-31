import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "./ui/button";
import { Blog } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BlogCard: FC<{ blog: Blog; className?: string }> = ({ blog, className }) => {
  return (
    <Card className={cn("w-full lg:w-[350px]", className)}>
      <CardHeader>
        <CardTitle className="text-primary">{blog.title}</CardTitle>
      </CardHeader>
      <CardContent>{blog.headline}</CardContent>
      <CardFooter className="flex justify-end">
        <Link href={"/blog/" + blog.id} className={buttonVariants()}>
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
