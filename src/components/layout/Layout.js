import React from "react";
import Navbar from "./../Navbar";

export const Layout = ({children}) => {
  return (
      <div>
        <Navbar />
        <main className="text-gray-400 bg-gray-900 body-font">
            {children}
        </main>
      </div>
  );
}