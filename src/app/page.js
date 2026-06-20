// import Image from "next/image";
// import cow from '../../public/asset/cow.png'
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="container mx-auto">
//       <Image  src={cow}
//   alt="cow"
//   fill
//   className="object-fill mx-10 h-screen relative md:object-cover md:h-auto"></Image>
    
//         <h1 className="text-4xl mt-20 text-center text-blue-400 font-bold"><span className="text-6xl">QurbaniHat</span>  <br></br> Livestock Booking Platform
// </h1>
//     <div className="flex justify-center">
//       <Link href={'/'}><button className="btn btn-primary rounded-full text-1.5xl mt-20 text-3xl font-bold p-3">Explore More<FaArrowRight />
// </button> </Link> 
//       </div>
     
//     </div>
//   );
// }
 import Image from "next/image";
import cow from "../../public/asset/cow.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
            <button className="mt-10 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-xl font-bold">
              Explore More <FaArrowRight />
            </button>
          </Link>

        </div>
      </div>

    </div>
  );
}