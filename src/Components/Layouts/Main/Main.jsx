import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/Header/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
