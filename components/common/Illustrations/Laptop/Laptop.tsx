import Image from "next/image";

import s from "./Laptop.module.css";

const Laptop = () => {
  return (
    <Image
      src="/laptop.png"
      alt="laptop"
      layout="responsive"
      width="800"
      height="800"
    />
  );
};

export default Laptop;
