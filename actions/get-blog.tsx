import { Blog } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;

const getBlog = async (id: string): Promise<Blog> => {
  const res = await fetch(`${URL}/${id}`, { cache: "no-cache" }).then((res) => res && res.json());

  return res;
};

export default getBlog;
