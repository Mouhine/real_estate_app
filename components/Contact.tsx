import React from "react";
import HeroImage from "./HeroImage";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const src =
    "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  return (
    <div className="grid grid-cols-1 py-4 gap-8 md:grid-cols-4 lg:w-[80%] lg:h-[600px] mx-auto ">
      <ContactInfo />
      <HeroImage src={src} />
    </div>
  );
};

export default Contact;
