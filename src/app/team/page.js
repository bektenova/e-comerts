import { Avatar } from "@mui/material";
import axios from "axios";
import { notFound } from "next/navigation";

const TeamPage = async () => {
  const response = await axios.get("https://dummyjson.com/users");
  const users = response.data.users;

  if (!response || !users) return notFound();

  return (
    <div
      className=" tw-px-7 md:tw-px-[185px] tw-flex tw-flex-col tw-items-center tw-gap-y-12
    tw-gap-x-12"
    >
      <div className="tw-flex tw-flex-col tw-text-center tw-pb-[45px]  ">
        <h1 className=" tw-flex tw-flex-col tw-w-[300px] tw-text-[40px] tw-font-bold md:tw-flex md:tw-flex-row md:tw-w-[400px] md:tw-items-center md:tw-pl-16 tw-pt-7 tw-pb-9">
          Meet Our Team
        </h1>
        <p className=" tw-flex tw-flex-col tw-w-[300px] tw-text-[#737373] md:tw-flex-row md:tw-w-[480px] md:tw-items-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-y-12 md:tw-flex-row md:tw-flex-wrap m md:tw-justify-between md:tw-gap-y-10 ">
        {users.map((item) => (
          <div key={item.id} className="tw-flex tw-flex-row md:tw-basis-1/3">
            <Avatar
              src={item.image}
              className="tw-w-[80px] tw-h-[80px] tw-pr-[30px] "
            />
            <div className="tw-flex tw-flex-col tw-gap-y-[5px] ">
              <p className="tw-text-[25px] tw-font-semibold">{`${item.firstName} ${item.lastName}`}</p>
              <p className="tw-text-[15px] tw-font-medium">
                {item.company.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamPage;
