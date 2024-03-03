"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-03-04");

const CountDown = () => {
  return (
    <Countdown
      className="font-bold text-5xl text-yellow-300"
      date={endingDate}
    />
  );
};

export default CountDown;
