
import React from "react";
import Carousel from "./Carousel";

function App() {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    
  ];

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;
