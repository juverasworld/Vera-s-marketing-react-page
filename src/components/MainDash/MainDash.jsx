import { Card } from "@mui/material";
import React from "react";
import Cards from "../Cards/Cards";
import CardTwo from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Welcome OnBoard</h1>
      <Cards />
      <CardTwo />
      <Table />
    </div>
  );
};

export default MainDash;
