import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 font-bold">
      <Link href={"/"} className="font-bold text-white">
        MONGODBCRUD.
      </Link>
      <Link href={"/addTopic"} className="bg-white p-2">
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
