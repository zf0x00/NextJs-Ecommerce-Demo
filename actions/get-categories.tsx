import { Category } from "@/types";

const URL = `${process.env.NEXT_STORE_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;

//fc way
// export default async function getwcategories(): Promise<Category[]> {
//   const res = await fetch(URL);
//   return res.json();
// }
