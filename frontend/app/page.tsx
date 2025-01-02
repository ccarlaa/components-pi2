import Image from "next/image";
import Logo from "../assets/logo_paraboia.svg";

export default function Home() {
  return (
    <div className="">
      <nav className="w-full px-6 py-4 flex justify-between items-center">
        <Image
        alt=""
        src={Logo}
        width={144}
        height={72}
        />
        <div className="h-12 w-12 rounded-full bg-green-400"></div>
      </nav>
      <main className="">

      </main>
      <footer className="">
      </footer>
    </div>
  );
}
