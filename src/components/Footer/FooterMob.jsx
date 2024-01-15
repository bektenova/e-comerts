import { Facebook, Instagram, Twitter } from "lucide-react";

const FooterMob = () => {
  return (
    <div className="tw-px-[200px] ">
      <div className="tw-flex tw-justify-between tw-items-center tw-pb- tw-pt-28">
        <h2 className="tw-font-extrabold tw-pt-16 tw-pb-28">Bandage</h2>
        <div className="tw-text-[#23A6F0]">
          <Facebook className="tw-pr-1" />
          <Instagram k className="tw-pr-2" />
          <Twitter />
        </div>
      </div>
      <div className="tw-flex tw-flex-row tw-gap-x-[100px] ">
        <div className="tw-flex-row">
          <h2 className="tw-pb-6">Company Info</h2>
          <p className="tw-text-[#737373] tw-font-bold  tw-pb-2"> About Us</p>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">Carrier</p>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">
            We are hiring
          </p>
          <p className="tw-text-[#737373] tw-font-bold">Blog</p>
        </div>

        <div className="tw-flex-row">
          <h2 className="tw-pb-6">Legal</h2>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">About Us</p>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">Carrier</p>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">
            We are hiring
          </p>
          <p className="tw-text-[#737373] tw-font-bold"> Blog</p>
        </div>

        <div className="">
          <h2 className="tw-pb-6">Features</h2>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">
            Business Marketing
          </p>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">
            User Analytic
          </p>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">Live Chat</p>
          <p className="tw-text-[#737373] tw-font-bold">Unlimited Support</p>
        </div>

        <div className="">
          <h2 className="tw-pb-6">Resources</h2>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">
            IOS & Android
          </p>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">Watch a Demo</p>
          <p className="tw-text-[#737373] tw-font-bold tw-pb-2">Customers</p>
          <p className="tw-text-[#737373] tw-font-bold">API</p>
        </div>
        <div className="">
          <h2 className="tw-pb-6">Get In Touch</h2>
          <p> </p>

          <p className="tw-text-[#737373] tw-font-bold">
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterMob;
