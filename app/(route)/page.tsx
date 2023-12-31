import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billbaord from "@/components/billboard/billbaord";
import ProductList from "@/components/productList/product-list";
import Container from "@/components/ui/container/container";
import Image from "next/image";

export const revalidate = 0;

export default async function Home() {
  const products = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboard("17df6064-8d22-4b80-b1fa-aaafae339219");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billbaord data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
