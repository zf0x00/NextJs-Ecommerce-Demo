import { Products } from "@/types";

const URL = `${process.env.NEXT_STORE_URL}/products`;

const getProduct = async (id: string): Promise<Products> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;

//fc way
// export default async function getwcategories(): Promise<Category[]> {
//   const res = await fetch(URL);
//   return res.json();
// }
