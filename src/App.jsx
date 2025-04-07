import React, { Suspense } from "react";
import { Toaster } from "sonner";
import Spinner from "./components/shared/Spinner";

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
      ></Suspense>
    </>
  );
}
