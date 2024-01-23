import { Button, buttonVariants } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Footer from "@/components/ui/footer/footer";
import Navbar from "@/components/ui/navbar/navbar";
import VideoLoader from "@/components/ui/videoloader";
import { cardList } from "@/lib/utils";
import { PlayIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center ">
      <Navbar />
      <div
        className={`absolute left-0 top-0 -z-[1] h-screen w-full bg-[url("/assets/landingbg.svg")] bg-cover bg-center bg-no-repeat`}
      ></div>
      <section className="relative flex h-screen w-full flex-col items-center justify-center gap-10 p-2.5 pt-[120px]">
        <h1 className=" max-w-[900px] text-center text-5xl font-bold duration-1000 animate-in fade-in slide-in-from-top md:text-6xl lg:text-8xl">
          Start de Coaching en Betaal Achteraf
        </h1>
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row">
          <Link target="_blank" href={"https://wa.me/message/IUBHU6NTSRG7B1"}>
            <Button
              className="w-[150px] duration-1000 animate-in fade-in slide-in-from-top"
              variant={"inverse"}
            >
              Doe mee
            </Button>
          </Link>
          <Link
            href={"/#video"}
            scroll={true}
            className={`${buttonVariants({ variant: "default" })} flex items-center justify-center gap-2.5 px-5 duration-1000 animate-in fade-in slide-in-from-top`}
          >
            <PlayIcon fill="#fff" size={14} />
            Bekijk Video
          </Link>
        </div>
        <VideoLoader />
      </section>
      <section className=" flex w-full flex-col items-center justify-center p-2.5 sm:mt-20 md:mt-40 lg:mt-96">
        <span className="text-center text-4xl font-bold duration-1000 animate-in fade-in slide-in-from-top">
          David, ons eerste Succesverhaal
        </span>
        <div className="flex w-full flex-wrap items-center justify-center gap-10">
          <div className="relative m-2.5 aspect-[3/4] w-full max-w-60 duration-1000 animate-in fade-in slide-in-from-top-10 md:max-w-96">
            <Image alt="" src={"/assets/phones.png"} objectFit="contain" fill />
          </div>
          <div className="flex flex-col items-center justify-center gap-5 p-2.5 md:items-start">
            <p className="max-w-[500px] duration-1000 animate-in fade-in slide-in-from-top">
              "In een mum van tijd had ik een professionele online winkel met
              kwaliteitsproducten en extreem mooie advertenties. De eerste sales
              begonnen gelijk binnen te stromen. Dit is waarom FCA de gratis
              achteraf betaling kan aanbieden. Sinds 2 maanden heb ik mij
              aangesloten bij FCA en ga ik helpen zoveel mogelijk mensen van 0,
              naar €5.000 winst te brengen."
            </p>
            <p className="text-neutral-400 duration-1000 animate-in fade-in slide-in-from-top-20">
              David kon starten met Dropshipping en geld verdienen, zonder
              vooraf duizenden euro’s te investeren in Coaching
            </p>
            <Link target="_blank" href={"https://wa.me/message/IUBHU6NTSRG7B1"}>
              <Button className="duration-1000 animate-in fade-in slide-in-from-top">
                Meld me aan
              </Button>
            </Link>
          </div>
          <div className="relative m-2.5 aspect-[3/4] w-full max-w-64 shadow-lg shadow-indigo-600 rounded-2xl duration-1000 animate-in fade-in slide-in-from-top-10">
            <Card className="w-full h-full bg-cover rounded-2xl">
              <div className="relative mt-7 aspect-square h-28">
                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 text-3xl font-black">
                  $0
                </span>
                <Image
                  alt=""
                  className=""
                  fill
                  objectFit="contain"
                  src={"/assets/shieldicon.svg"}
                />
              </div>
              <div className="mt-5 flex flex-col  items-center justify-center text-center ">
                <span className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text text-2xl font-semibold text-transparent">
                  Betaal achteraf
                </span>
                <span className="text-xs text-neutral-500">
                  Start de coaching & betaal daarna
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="relative my-10 flex w-full flex-col items-center justify-center gap-10 p-2.5">
        <div className="absolute left-1/2 top-1/2 -z-[1] h-full min-h-[300px] w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,_rgba(80,0,255,0.1)_0%,_rgba(0,0,0,0)_50%)]" />
        <span className="text-center text-4xl font-bold duration-1000 animate-in fade-in slide-in-from-top">
          Wat ons onderscheidt van de rest
        </span>
        <div className="flex w-full max-w-[800px] flex-wrap items-center justify-center gap-10 duration-1000 animate-in fade-in slide-in-from-top-10">
          {cardList.map(({ title, description }, i) => (
            <Card key={i}>
              <div
                className={`mt-5 h-[45px] w-[40px] bg-[url("/assets/cardicon.svg")]`}
              />
              <div className="flex flex-col items-center justify-center gap-2.5 text-center">
                <span className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text text-xl font-semibold text-transparent">
                  {title}
                </span>
                <span className="text-xs text-neutral-500">{description}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className=" my-10 flex w-full flex-col items-center justify-center gap-10 p-2.5">
        <span className="text-center text-4xl font-bold duration-1000 animate-in fade-in slide-in-from-top">
          Meld je aan
        </span>
        <div className="relative w-full max-w-[1000px]">
          <div
            className={`flex aspect-video w-full flex-col-reverse items-center justify-around rounded-2xl bg-[url("/assets/galaxy.webp")] bg-cover bg-center p-10 duration-1000 animate-in fade-in slide-in-from-top-10 md:flex-row`}
          >
            <div className="flex flex-col items-start justify-center gap-5">
              <span className=" max-w-[400px] text-4xl font-bold">
                Start het screeningproces nu!
              </span>
              <p className="max-w-[500px]">
                Neem contact op, en beantwoordt de 2 simpele vragen die we je
                gaan stellen. Aan de hand hiervan kunnen we bepalen of we je
                gaan toelaten aan de coaching aangezien we geen upfront
                betaling vereisten.
              </p>
              <Link
                target="_blank"
                href={"https://wa.me/message/IUBHU6NTSRG7B1"}
              >
                <Button variant={"cta"}>Neem nu contact op</Button>
              </Link>
            </div>
            <div className="relative aspect-square h-60">
              <Image
                alt=""
                className=""
                fill
                objectFit="contain"
                src={"/assets/whatsapp.svg"}
              />
            </div>
          </div>
          <div className="absolute left-0 top-0 -z-[1] h-full w-full bg-indigo-500/50 blur-3xl" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
