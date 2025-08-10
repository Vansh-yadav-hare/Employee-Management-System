import React from "react";

const Header = ({ changeUser, data }) => {
  // Use data from props or fallback to localStorage for persistence after refresh
  const userData =
    data || JSON.parse(localStorage.getItem("loggedInUser"))?.data || null;

  return (
    <header className="flex justify-between items-center p-4 bg-gray-300 shadow-md">
      {/* Greeting */}
      <h1 className="text-lg font-medium text-gray-900">
        {userData?.firstname ? `Hi, ${userData.firstname} 👋` : "Hi  User 👋"}
      </h1>

      {/* Logout button */}
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-all duration-200"
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          changeUser(null);
        }}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
