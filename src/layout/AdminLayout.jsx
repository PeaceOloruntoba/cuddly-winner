import React from "react";
import Header from "../components/ui/Header";
import { Outlet } from "react-router";
import Foorter from "../components/ui/Foorter";

export default function AdminLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Outlet />
      <Foorter />
    </div>
  );
}
