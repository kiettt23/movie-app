import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Đặt flex column và min-height cho toàn bộ trang */}
      <Navbar />
      <main className="flex-grow">
        {/* Chạy flex-grow để đảm bảo phần này chiếm hết không gian còn lại */}
        <Outlet />
      </main>
      <Footer /> {/* Footer sẽ ở dưới cùng nhờ flexbox */}
    </div>
  );
};

export default MainLayout;
