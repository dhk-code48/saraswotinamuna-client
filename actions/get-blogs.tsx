import { Blog } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;

interface Query {
  categoryId?: string;
  subcategoryId?: string;
  authorId?: string;
  isFeatured?: boolean;
}

const getBlogs = async (query: Query): Promise<Blog[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      authorId: query.authorId,
      subcategoryId: query.subcategoryId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url, { cache: "no-cache" }).then((res) => res && res.json());

  return res;
};

export default getBlogs;
