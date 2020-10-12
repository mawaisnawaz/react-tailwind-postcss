import React from "react";
const Footer = () => {
  return (
    <footer className="absolute left-0 bottom-0 w-full h-20 bg-gray-800 text-xs">
      <hr className="border-gray-700" />
      <div className="flex items-center justify-between mx-auto p-2 text-gray-200">
        <div className="mr-auto">Copyright &copy; 2020</div>
      </div>
    </footer>
  );
};

export default Footer;
