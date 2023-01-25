import React from "react";
import ContactCards from "./ContactCards";

const ContactInfo = () => {
  return (
    <div className="col-span-2 grid place-content-center px-4 lg:w-full mx-auto">
      <p className="text-lg text-[#be8457]  ">Contact Us</p>
      <h2 className="text-3xl font-bold text-[#1d3457]">Easy to contact US </h2>
      <p className="text-sm  tracking-wide font-semibold my-4 text-[#8a8e96]">
        is there a problem finding your dream home ? Need a guide in buying your
        first home ? or need a consultation on resedential issues ? just contact
        us
      </p>
      <ContactCards />
    </div>
  );
};

export default ContactInfo;
