import { BillBoard } from "@/types";

const URL = `${process.env.NEXT_STORE_URL}/billboards`;

const getBillboard = async (id: string): Promise<BillBoard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;

//fc way
// export default async function getwcategories(): Promise<Category[]> {
//   const res = await fetch(URL);
//   return res.json();
// }
