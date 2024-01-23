import Image from "next/image";

function Footer() {
  return (
    <footer className="flex w-full flex-wrap items-center px-10 py-2.5 border-t border-t-neutral-800 justify-center md:justify-between bg-neutral-950">
      <div className="relative aspect-square h-20">
        <Image alt="" objectFit="contain" fill src={"/assets/logo.png"} />
      </div>
      <span className="text-center">Copyright © 2024 Freecommerce Academy | All Rights Reserved </span>
    </footer>
  );
}

export default Footer;
