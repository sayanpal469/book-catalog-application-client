import Nav from "./Nav";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
