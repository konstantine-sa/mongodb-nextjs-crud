import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 ">
      <Link className="font-bold text-white hover:text-slate-200 " href={"/"}>
        Home
      </Link>
      <Link
        className=" bg-white p-2 rounded-md hover:bg-slate-200"
        href={"/addTopic"}
      >
        Add topic
      </Link>
    </nav>
  );
}

export default Navbar;
