import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
import { CryptoContext } from "../context/CryptoContext";

const Logo = () => {
  let {resetPage} = useContext(CryptoContext);

  return (
    <Link
    onClick={resetPage}
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-[#0d6eff] flex items-center
     "
    >
      <img src={logoSvg} alt="Cryptobase" />
      <span>Cryptobase</span>
    </Link>
  );
};

export default Logo;