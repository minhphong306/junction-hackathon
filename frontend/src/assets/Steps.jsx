import React from "react";
import myImage1 from "./step1.png";
import myImage2 from "./step2.png";
import myImage3 from "./step3.png";

export function Step1() {
  return <img src={myImage1} alt="Step1" />;
}
export function Step2() {
  return <img src={myImage2} alt="Step2" />;
}
export function Step3() {
  return <img src={myImage3} alt="Step3" />;
}
