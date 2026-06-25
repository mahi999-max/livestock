
 import Image from "next/image";
import cow from "../../public/asset/cow.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import 'animate.css';
export default function Home() {
  return (
    <div className="w-full my-auto">

      <div className="relative h-[50vh] md:h-[80vh] w-full overflow-hidden ">

        <Image
          src={cow}
          alt="cow"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

          <h1 className="text-white text-3xl md:text-5xl font-bold">
            <span className="text-5xl md:text-6xl text-yellow-300">
              QurbaniHat
            </span>
            <br />
            Livestock Booking Platform
          </h1>

          <Link href="/main">
            <button className="mt-10 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-xl font-bold animate__animated animate__bounce animate__infinite animte__slow">
              Explore More <FaArrowRight />
            </button>
          </Link>

        </div>
      </div>

    </div>
  );
}