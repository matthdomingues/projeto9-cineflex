import React from "react";
import "./assets/reset.css";

import "./components/catalog/catalog.css";
import Catalog from "./components/catalog/catalog";

import "./components/schedule/schedule.css";
import Schedule from "./components/schedule/schedule";

import "./components/seats/seats.css";
import Seats from "./components/seats/seats";

import "./components/request/request.css";
import Request from "./components/request/request";

export default function App() {
  return (
    <>
      <Catalog />
    </>
  );
}

