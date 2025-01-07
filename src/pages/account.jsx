import { useState, useEffect } from "react";
import "./account.css";
const AccountPage = () => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);
  return (
    <div className="account-container">
      <h1 className="account-title">Your Account</h1>
      <div className="account-list">
        <img src={info?.image} alt="pp" className="account-image" />
        <table>
          <tbody>
            <tr>
              <td className="table-header">Username</td>
              <td>{info?.username}</td>
            </tr>
            <tr>
              <td className="table-header">First Name</td>
              <td>{info?.firstName}</td>
            </tr>
            <tr>
              <td className="table-header">Last Name</td>
              <td>{info?.lastName}</td>
            </tr>
            <tr>
              <td className="table-header">Maiden Name</td>
              <td>{info?.maidenName}</td>
            </tr>
            <tr>
              <td className="table-header">Email</td>
              <td>{info?.email}</td>
            </tr>
            <tr>
              <td className="table-header">Phone</td>
              <td>{info?.phone}</td>
            </tr>
            <tr>
              <td className="table-header">University</td>
              <td>{info?.university}</td>
            </tr>
            <tr>
              <td className="table-header">Age</td>
              <td>{info?.age}</td>
            </tr>
            <tr>
              <td className="table-header">Gender</td>
              <td>{info?.gender}</td>
            </tr>
            <tr>
              <td className="table-header">Blood Group</td>
              <td>{info?.bloodGroup}</td>
            </tr>
          </tbody>
        </table>
        <div className="address-company-container">
          <div>
            <h1 className="section-title">Address</h1>
            <p>{info?.address.address}</p>
            <p>
              {info?.address.city}, {info?.address.postalCode},{" "}
              {info?.address.state}
            </p>
          </div>
          <div>
            <h1 className="section-title">Company</h1>
            <p>{info?.company.name}</p>
            <p>{info?.company.title}</p>
            <p>{info?.company.department}</p>
            <p>{info?.company.address.address}</p>
            <p>
              {info?.company.address.city}, {info?.company.address.postalCode},{" "}
              {info?.company.address.state}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountPage;
