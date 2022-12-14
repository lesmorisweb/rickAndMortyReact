import { useState } from "react";
import { ICard } from "./interfaces";
import "./card.css";

export function Card({ name, image, location }: ICard) {
  return (
    <div className="card">
      <h4>{name}</h4>
      <img src={image}></img>
      <h6>{location}</h6>
    </div>
  );
}
