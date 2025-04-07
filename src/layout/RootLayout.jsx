import React from "react";
import Header from "../components/ui/Header";
import { Outlet } from "react-router";
import Foorter from "../components/ui/Foorter";
// import "./Watermark.css";

export default function RootLayout() {
  return (
    <div className="w-screen h-screen flex flex-col root-layout">
      <Header />
      <Outlet />
      <Foorter />
    </div>
  );
}
