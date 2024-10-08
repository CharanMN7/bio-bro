"use client";
import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <h2 className="text-gray-800 text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
