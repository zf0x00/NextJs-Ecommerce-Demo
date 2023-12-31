import getCategory from "@/actions/get-categorie";
import getColors from "@/actions/get-color";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billbaord from "@/components/billboard/billbaord";
import Filter from "@/components/filter/filter";
import MobileFilters from "@/components/filter/mobile-filters";
import NoResults from "@/components/no results/no-results";
import ProductCard from "@/components/product-card/product-card";
import Container from "@/components/ui/container/container";
import React from "react";

export const revalidate = 0;

interface CategoryProps {
  params: {
    categoryId: string;
  };

  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export default async function Categorypage({
  params,
  searchParams,
}: CategoryProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billbaord data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-6 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            {/* Products */}
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
