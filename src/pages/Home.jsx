import { render } from "@testing-library/react";
import React from "react";
import Card from "../component/Card";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import { Users } from "../data";

export default function Home() {
  return (
    <div className="bg-slate-100 h-[100vh] w-[100vw]">
      {/* <Navbar /> */}
      <Hero />
      <Card />;
    </div>
  );
}
