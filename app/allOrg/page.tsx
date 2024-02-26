"use client";
import React from "react";
async function getMyAllOrg() {
  const res = await fetch("http://localhost:3000/api/getAllOrg");
  return res.json();
}

export default function page() {
  return (
    <div>
      <h1>All Organizations</h1>
      <button
        className=" bg-orange-300 rounded-lg px-2 m-auto "
        onClick={async () => {
          const allOrg = await getMyAllOrg();
          console.log(allOrg);
        }}
      >
        get all organizations
      </button>
    </div>
  );
}
