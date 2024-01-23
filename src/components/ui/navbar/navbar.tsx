import Link from "next/link";
import { Button } from "../button";
// import GradientBorder from "@/components/gradientborder";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed left-0 top-5 md:top-10 z-[999] flex h-20 w-full items-center justify-center ">
      <div className="mx-5 flex  h-20 w-full max-w-[1400px] items-center justify-between rounded-xl border border-white/25 bg-black/20 px-10 backdrop-blur-md">
        <div className="relative aspect-square w-20">
          <Image alt="" src={"/assets/logo.png"} fill />
        </div>

        <Link target="_blank" href={"https://wa.me/message/IUBHU6NTSRG7B1"} about="">
          <Button>Join</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
