import React from "react";
import User from "./User";

const Header = () => {
  return (
    <header className="flex text-sm text-gray-700 p-5 justify-between">
      <div className="flex items-center space-x-4">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex items-center space-x-4">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <User />
      </div>
    </header>
  );
};

export default Header;
