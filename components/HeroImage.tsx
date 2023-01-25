import React from "react";
import Image from "next/image";
interface HeroProps {
  src: string;
}
const HeroImage = ({ src }: HeroProps) => {
  return (
    <div className=" col-span-2  lg:w-[80%] place-self-center lg:h-[75vh] h-[60vh] bg-gray-600  backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-t-full p-8">
      <div className="rounded-t-full w-full h-full ">
        <Image
          src={src}
          alt="hero image"
          width={6000}
          height={500}
          className="rounded-t-full  h-full w-full "
        />
      </div>
    </div>
  );
};

export default HeroImage;
