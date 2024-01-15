"use client";
import { Button } from "@mui/material";
import ModelGuy from "@/assets/modelguy.png";
import Image from "next/image";

const GreenClassicDesk = () => {
  return (
    <div className="tw-pt-20">
      <div className="tw-hidden md:tw-flex tw-pt-[90px] tw-bg-[#23856D]  tw-justify-around">
        <div className="tw-flex tw-text-white tw-flex-col tw-gap-y-[30px] tw-text-center tw-justify-center ">
          <h5>SUMMER 2020</h5>
          <h1>Vita Classic Product</h1>
          <h4>
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="tw-flex tw-gap-x-3">
            <h5 className="tw-text-[25px] ">$16.48</h5>
            <Button variant="contained" className="tw-bg-[#2DC071]">
              add to cart
            </Button>
          </div>
        </div>
        <div>
          <Image src={ModelGuy} alt="model" />
        </div>
      </div>
    </div>
  );
};

export default GreenClassicDesk;
