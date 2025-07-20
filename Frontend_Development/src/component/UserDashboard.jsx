import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import UserSideBar from "./UserProfileDashboard/UserSideBar";
import MyProfile from "./UserProfileDashboard/MyProfile";
import MyAddress from "./UserProfileDashboard/MyAddress";
import MyOrder from "./UserProfileDashboard/MyOrder";
import Wishlist from "./UserProfileDashboard/Wishlist";
import MyOffer from "./UserProfileDashboard/MyOffer";

=======
import UserSidebar from "./UserProfileDashboard/Usersidebar";
import MyProfile from "./UserProfileDashboard/MyProfile";
import Myaddress from "./UserProfileDashboard/Myaddress";
import MyOrders from "./UserProfileDashboard/Myorders";
import Wishlist from "./UserProfileDashboard/Wishlist";
import Myoffers from "./UserProfileDashboard/Myoffers";

// Import your components
>>>>>>> 8831020fd900bd3462c9029700e445b8ce93fd97

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("Profile");

  // Dynamically load components based on sidebar selection
  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <MyProfile />;
      case "Address":
<<<<<<< HEAD
        return <MyAddress />;
      case "Order":
        return <MyOrder />;
      case "Offers":
        return <MyOffer />;
      case "UserSideBar":
        return <UserSideBar />;
=======
        return <Myaddress />;
      case "Order":
        return <MyOrders />;
      case "Offers":
        return <Myoffers />;
>>>>>>> 8831020fd900bd3462c9029700e445b8ce93fd97
      case "Wishlist":
        return <Wishlist />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: "250px" }} className="bg-light border-end">
<<<<<<< HEAD
        <UserSideBar setActiveSection={setActiveSection} />
=======
        <UserSidebar setActiveSection={setActiveSection} />
>>>>>>> 8831020fd900bd3462c9029700e445b8ce93fd97
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">{renderContent()}</div>
    </div>
  );
};

<<<<<<< HEAD
export default UserDashboard;
=======
export default UserDashboard;
>>>>>>> 8831020fd900bd3462c9029700e445b8ce93fd97
