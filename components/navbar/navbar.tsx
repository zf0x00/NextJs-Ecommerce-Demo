import React from "react";
import Container from "../ui/container/container";
import Link from "next/link";
import MainNav from "../mainnav/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "../navbar-actions/navbar-actions";

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <header className="mx-20 xl:mx-32 border-b">
      <Container>
        <div className="flex relative px-4 sm:px-6 lg:px-8 h-16 items-center">
          <Link href={"/"} className="ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-3xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
}
