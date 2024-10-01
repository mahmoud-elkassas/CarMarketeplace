import React from "react";
import {
  FaCar,
  FaCheckCircle,
  FaMoneyBillAlt,
  FaChargingStation,
  FaIndustry,
  FaCarSide,
  FaCalendarAlt,
  FaRoad,
  FaCogs,
  FaGasPump,
  FaTachometerAlt,
  FaWrench,
  FaCircle,
  FaPalette,
  FaDoorClosed,
  FaIdCard,
  FaTags,
  FaFileAlt,
  FaClipboardList,
  FaTag,
  FaDollarSign,
} from "react-icons/fa";


const iconMap = {
  FaCar: <FaCar />,
  FaCheckCircle: <FaCheckCircle />,
  FaTachometerAlt: <FaTachometerAlt />,
  FaChargingStation: <FaChargingStation />,
  FaIndustry: <FaIndustry />, 
  FaCarSide: <FaCarSide />,
  FaMoneyBillAlt: <FaMoneyBillAlt />,
  FaCalendarAlt: <FaCalendarAlt />,
  FaRoad: <FaRoad />,
  FaCogs: <FaCogs />,
  FaGasPump: <FaGasPump />,
  FaWrench: <FaWrench />,
  FaCircle: <FaCircle />,
  FaPalette: <FaPalette />,
  FaDoorClosed: <FaDoorClosed />,
  FaIdCard: <FaIdCard />,
  FaTags: <FaTags />,
  FaFileAlt: <FaFileAlt />,
  FaClipboardList: <FaClipboardList />,
  FaTag: <FaTag />,
  FaDollarSign: <FaDollarSign />,
};


const IconField = ({ icon }) => {
  return (
    <div className="text-primary bg-blue-100 p-1.5 rounded-full">
      {iconMap[icon] || <FaCircle />} 
    </div>
  );
};

export default IconField;
