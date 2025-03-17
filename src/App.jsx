import React from "react";
import Hero from "./sections/Hero";
import Page from "./components/Page";

const App = () => {
  const para = [
    {
      desc: "Engineered for Adventure. Built with a rugged titanium case, the Apple Watch Ultra is designed to endure extreme conditions. The precision-cut speaker vents enhance sound clarity, while the tactile Action Button offers instant access to essential features. Paired with a breathable, high-performance band, it ensures all-day comfort for your active lifestyle.",
    },
    {
      desc: "Designed for Comfort & Durability.Crafted with high-performance fabric, the Apple Watch strap ensures a secure yet breathable fit. The precision-engineered buckle offers stability during intense activities, while the dual-color design adds a bold, modern touch. Perfect for adventure seekers and everyday wear alike.",
    },
    {
      desc: "Unmatched Performance, Effortless Control.The Apple Watch seamlessly blends cutting-edge technology with an intuitive interface. With a sleek titanium frame, a responsive digital crown, and an always-on Retina display, it delivers an unmatched experience. Stay connected with calls, messages, and real-time health insights, all at your fingertips.",
    },
  ];

  return (
    <main className="overflow-hidden">
      <Hero />
      {para.map((para, index) => {
        return (
          <Page
            key={index}
            para={para.desc}
            position={index % 2 === 0 ? "right" : "left"}
          />
        );
      })}
    </main>
  );
};
export default App;
