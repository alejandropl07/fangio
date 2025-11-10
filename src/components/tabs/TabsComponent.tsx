"use client";
import SwitchDark from "@/src/components/switch/SwitchDark";
import { Tab, TabList, Tabs } from "react-tabs";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "@/src/redux/features/auth/authSlice";

function TabsComponent() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleMenuClick = (menuName: string) => {
    router.push(`/${menuName}`);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push(`/`);
  };

  const menuItem = [
    {
      icon: "fa-home",
      menuName: "Inicio",
      onClick: () => handleMenuClick(""),
    },
    {
      icon: "fa-users",
      menuName: "Acerca",
      onClick: () => handleMenuClick("about"),
    },
    {
      icon: "fa-briefcase",
      menuName: "Servicios",
      onClick: () => handleMenuClick("services"),
    },
    {
      icon: "fa-briefcase",
      menuName: "Reseñas",
      onClick: () => handleMenuClick("review"),
    },
    {
      icon: "fa-comments",
      menuName: "Blog",
      onClick: () => handleMenuClick("blog"),
    },
    {
      icon: "fa-envelope-open",
      menuName: "Contacto",
      onClick: () => handleMenuClick("contact"),
    },
    // {
    //   icon: "fa-user",
    //   menuName: "Login",
    //   onClick: () => handleMenuClick("login"),
    // },
  ];

  const menuItemDashboard = [
    {
      icon: "fa-home",
      menuName: "Home",
      onClick: () => handleMenuClick(""),
    },
    {
      icon: "fa-users",
      menuName: "Leads",
      onClick: () => handleMenuClick("leads"),
    },
    {
      icon: "fa-sign-out ",
      menuName: "Logout",
      onClick: () => handleLogout(),
    },
  ];

  const { isAuth } = useAppSelector((state) => state.auth);

  const menu = isAuth ? menuItemDashboard : menuItem;

  return (
    <div className="yellow">
      <SwitchDark />
      
    </div>
  );
}

export default TabsComponent;
