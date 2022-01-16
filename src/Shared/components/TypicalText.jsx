import React, { Component } from "react";
import Typical from "react-typical";

const Example = () => {
  return (
    <Typical
      steps={["Hello", 1000, "Hello world!", 500, "world", 500]}
      loop={Infinity}
      wrapper="p"
    />
  );
};

export default Example;
