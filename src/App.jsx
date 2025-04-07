import React, { Suspense } from "react";
import { Toaster } from "sonner";
import Spinner from "./components/shared/Spinner";
import { Route, Routes } from "react-router";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import ScrollToTop from "./layout/ScrollToTop";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Suspense
        fallback={
          <div className="w-screen h-screen flex items-center justify-center text-center">
            <Spinner />
          </div>
        }
      >
        <ScrollToTop />
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={}></Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}
