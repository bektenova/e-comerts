import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const CallToAction = () => {
  return (
    <div className="tw-hidden tw-md:flex tw-bg-[#252B42]  tw-justify-between tw-text-white tw-h-[70px] tw-items-center tw-font-[14px] tw-px-6">
      <div className="tw-flex tw-gap-x-1">
        <Phone />
        <h6 className="tw-pr-[100px]">(225) 555-0118</h6>
        <Mail />
        <h6>michelle.rivera@example.com</h6>
      </div>
      <div>
        <h6>Follow Us and get a chance to win 80% off</h6>
      </div>
      <div className="tw-flex tw-gap-x-4">
        <h6>Follow Us:</h6>
        <Instagram />
        <Youtube />
        <Facebook />
        <Twitter />
      </div>
    </div>
  );
};
export default CallToAction;
