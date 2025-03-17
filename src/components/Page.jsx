import React from "react";

const Page = ({ para, position }) => {
  return (
    <section
      className={`w-full h-screen bg-zinc-950 text-zinc-200 flex items-center ${
        position === "right" ? "justify-end" : "justify-start"
      } ${position === "right" ? "text-right" : "text-left"} p-6`}
    >
      <p className="w-1/2 text-2xl font-semibold masked">{para}</p>
    </section>
  );
};

export default Page;
