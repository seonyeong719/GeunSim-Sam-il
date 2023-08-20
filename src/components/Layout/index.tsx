import { Outlet } from "react-router-dom";
import Header from "./Header/header";

function LayoutIndex() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default LayoutIndex;
