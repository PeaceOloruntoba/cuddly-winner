import React, { Suspense } from "react";
import { Toaster } from "sonner";
import Spinner from "./components/shared/Spinner";
import { Route, Routes } from "react-router";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";

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
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
