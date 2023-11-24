import React from "react";
import Search from "./Search";
import Sort from "./Sort";

import CurrencyChange from "./CurrencyChange";

function Filter() {
  return (
    <div
      className="w-full h-full border-2 border-gray-100 rounded-lg
  flex flex-col md:flex-row items-center justify-between relative
  "
    >
      <Search />
      <CurrencyChange />
      <Sort />
    </div>
  );
}

export default Filter;
