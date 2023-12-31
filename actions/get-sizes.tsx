import { Size } from "@/types";

const URL = `${process.env.NEXT_STORE_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;

//fc way
// export default async function getwcategories(): Promise<Category[]> {
//   const res = await fetch(URL);
//   return res.json();
// }
