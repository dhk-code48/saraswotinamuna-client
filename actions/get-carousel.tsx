import { Carousel } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/carousel`;

const getCarousel = async (): Promise<Carousel[]> => {
  const res = await fetch(URL, { cache: "no-cache" }).then((res) => res && res.json());

  return res;
};

export default getCarousel;
