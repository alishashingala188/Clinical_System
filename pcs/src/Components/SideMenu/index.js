import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CallIcon from '@mui/icons-material/Call';
import LogoutIcon from '@mui/icons-material/Logout';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
      style={{ backgroundColor:"rgba(23,57,125)" ,color:'white'}}
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
          
        }}
        selectedKeys={[selectedKeys]}
        items={[
          
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/",
            
          },
          {
            label: "Profile",
            key: "/inventory",
            icon:  <UserOutlined />,
          },
          {
            label: "Doctor",
            key: "/orders",
            icon: <FavoriteBorderIcon />,
          },
          {
            label: "Appoinment",
            key: "/appoinment",
            icon: <BorderColorIcon />,
          },
          {
            label: "feedback",
            key: "/feedback",
            icon: <ThumbUpOffAltIcon />,
          },
          {
            label: "contact",
            key: "/contect",
            icon: <CallIcon />,
          },
          {
            label: "Payment",
            key: "/payment",
            icon: <RequestQuoteIcon />,
          },
          {
            label: "Logout",
            key: "/logout",
            icon: <LogoutIcon />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
