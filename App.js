import React from "react";
import { YellowBox, Clipboard } from "react-native";
import { firebaseApp } from "./app/utils/firebase";
import Navigation from "./app/navigations/Navigation";
import { decode, encode } from "base-64";

YellowBox.ignoreWarnings(["Setting a timer"]);

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

if (__DEV__) {
  Clipboard.setString("");
}

export default function App() {
  return <Navigation />;
}
