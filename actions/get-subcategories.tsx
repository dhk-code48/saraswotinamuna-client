import { SubCategory } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/subcategories`;

const getSubCategories = async (id: string): Promise<SubCategory[]> => {
  const res = await fetch(URL + "?categoryId=" + id).then((res) => res && res.json());

  return res;
};

export default getSubCategories;
