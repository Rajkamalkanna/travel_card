import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./styles.css";
import data from "./components/data";

export default function App() {
  const elements = data.map((newData) => {
    return (
      <Card
        key={newData.id}
        country={newData.country}
        view={newData.view}
        place={newData.place}
        date={newData.date}
        description={newData.description}
        img={newData.img}
      />
    );
  });
  return (
    <div>
      <Navbar />
      {elements}
    </div>
  );
}
