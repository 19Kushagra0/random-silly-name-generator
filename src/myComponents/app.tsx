import React from "react";
import "@/myComponents/app.css";

export default function app() {
  var generateName = require("sillyname");
  var sillyName = generateName();

  console.log(`My name is ${sillyName}.`);

  return <div className="app"></div>;
}
