import React from "react";
import Header from "../components/ui/Header";
import { Outlet, useNavigate } from "react-router";
import Foorter from "../components/ui/Foorter";
import useAdminStore from "../store/useAdminStore";
import "./Watermark.css";
import Spinner from "../components/shared/Spinner";

export default function AdminLayout() {
  const token = useAdminStore((state) => state.token);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (!token) {
    return <Spinner />;
  }

  return (
    <div className="w-screen h-screen flex flex-col admin-layout">
      <Header />
      <Outlet />
      <Foorter />
    </div>
  );
}
