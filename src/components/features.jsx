import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import "./features.css";

const data = [
  {
    icon: <TbTruckDelivery className="feature-icon" />,
    title: "Free Delivery",
    desc: "Orders from all items",
  },
  {
    icon: <RiRefund2Fill className="feature-icon" />,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    icon: <TbDiscount className="feature-icon" />,
    title: "Member Discount",
    desc: "On order over $99",
  },
  {
    icon: <MdSupportAgent className="feature-icon" />,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day",
  },
];

const Features = () => {
  return (
    <div className="features">
      {data.map((item, index) => (
        <div key={index} className="feature-card">
          {item.icon}
          <div className="feature-text">
          <h3 className="feature-title">{item.title}</h3>
          <p className="feature-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Features;
