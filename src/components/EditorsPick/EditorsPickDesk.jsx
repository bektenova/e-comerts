import Image from "next/image";
import Pic1 from "../../assets/filter(1).png";
import Pic2 from "../../assets/filter(2).png";
import Pic3 from "../../assets/filter(3).png";
import Pic4 from "../../assets/filter(4).png";

const EditorsPickDesk = () => {
  return (
    <div className="tw-hidden md:tw-block ">
      <div className="tw-flex tw-flex-col tw-items-center">
        <h1 className="tw-text-[#252B42] tw-pb-5">EDITOR&quot;S PICK</h1>
        <p className="tw-text-[#737373] tw-pb-6">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className=" tw-gap-x-[30px] tw-flex tw-justify-center">
        <div className="tw-flex tw-gap-x-[30px]">
          <div className="tw-flex tw-flex-col">
            <Image src={Pic1} alt="pictures" />
            <span className="tw-text-[#252B42] tw-mt-[-80px] tw-text-center tw-uppercase tw-font-bold tw-bg-white tw-px-3 tw-py-1 tw-rounded tw-w-[70px] tw-ml-[50px]">
              men
            </span>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <Image src={Pic2} alt="pictures" />
            <span className="tw-text-[#252B42] tw-mt-[-80px] tw-text-center tw-uppercase tw-font-bold tw-bg-white tw-px-3 tw-py-1 tw-rounded tw-w-[70px] tw-ml-[50px]">
              women
            </span>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-y-[72px]">
          <div className="tw-flex tw-flex-col">
            <Image src={Pic3} alt="pictures" />

            <span className="tw-text-[#252B42] tw-mt-[-80px] tw-text-center tw-uppercase tw-font-bold tw-bg-white tw-px-3 tw-py-1 tw-rounded tw-w-[110px] tw-ml-[50px]">
              accessories
            </span>
          </div>
          <div className="tw-flex tw-flex-col">
            <Image src={Pic4} alt="pictures" />
            <span className="tw-text-[#252B42] tw-mt-[-80px] tw-text-center tw-uppercase tw-font-bold tw-bg-white tw-px-3 tw-py-1 tw-rounded tw-w-[70px] tw-ml-[50px]">
              kids
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPickDesk;
