import { Author } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/authors`;

const getColors = async (): Promise<Author[]> => {
  const res = await fetch(URL).then((res) => res && res.json());

  return res;
};

export default getColors;
