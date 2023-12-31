import { Color } from "@/types";

const URL = `${process.env.NEXT_STORE_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getColors;

//fc way
// export default async function getwcategories(): Promise<Category[]> {
//   const res = await fetch(URL);
//   return res.json();
// }
