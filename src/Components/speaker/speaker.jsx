import React from "react";
import { Component } from "react";
import speaker from "./speaker.module.css";

function Speaker(props) {
  return (
    <>
      <div
        className={speaker.speaker}
        style={{ width: props.width, height: props.height }}
      >
        <img src={props.img} alt={props.name} />
        <div className={speaker.info}>
          <h2 className={speaker.name}>{props.name}</h2>
          <h5 className={speaker.job}>{props.job}</h5>
        </div>
      </div>
    </>
  );
}

export default Speaker;
