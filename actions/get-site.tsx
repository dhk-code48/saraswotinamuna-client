import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_URL}/sites/${process.env.SITE_ID}`;

const getSite = async (): Promise<Billboard> => {
  const res = await fetch(`${URL}`).then((res) => res && res.json());

  return res;
};

export default getSite;
