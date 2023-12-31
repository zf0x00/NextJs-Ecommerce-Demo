import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery/gallery";
import Info from "@/components/info/info";
import ProductList from "@/components/productList/product-list";
import Container from "@/components/ui/container/container";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);

  console.log(product);
  const suggestedProduct = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-6">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-2">
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Products" items={suggestedProduct} />
        </div>
      </Container>
    </div>
  );
}
