import React, { useRef, useContext } from "react";
import submitIcon from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";

const CurrencyChange = () => {
  let { setCurrency } = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };
  return (
    <form
      onSubmit={handleCurrencySubmit}
      className="w-full relative flex justify-start gap-0.5 ml-5 my-4 md:my-2 md:my-0 mr-1 md:mr-10 lg:mr-12"
    >
      <label
        className="flex items-center justify-center mr-1 md:mr-2 sm:text-xs md:text-sm"
        htmlFor="currency"
      >
        Currency:
      </label>
      <input
        ref={currencyRef}
        className="w-12 px-2 rounded bg-gray-200 required outline-0 border border-transparent focus:border-[#808080] leading-4"
        type="text"
        name="currency"
        placeholder="usd"
      />
      <button className="cursor-pointer w-6 h-6 ml-1.5" type="submit">
        <img className="w-full h-auto" src={submitIcon} alt="submit-icon" />
      </button>
    </form>
  );
};

export default CurrencyChange;
