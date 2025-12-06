import React, { useEffect } from "react";
import "./Scroller.css";
import sample from "../../../"

// Updated image IDs ranging from 1 to 24
const images = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
];

// Dynamically require images from the local folder with fallback formats
const importImage = (id) => {
  try {
    return require(`../../../assets/images/Scroller/${id}.webp`); // Attempt to load .webp
  } catch (e) {
    try {
      return require(`../../../assets/images/Scroller/${id}.jpg`); // Fallback to .jpg
    } catch (e) {
      try {
        return require(`../../../assets/images/Scroller/${id}.jfif`); // Fallback to .jfif
      } catch (e) {
        try {
          return require(`../../../assets/images/Scroller/${id}.jpeg`); // Fallback to .png
        } catch (e) {
          return ""; // If no image is found, return an empty string (you can also return a placeholder)
        }
      }
    }
  }
};

const Scroller = () => {
  useEffect(() => {
    document.querySelectorAll(".column").forEach((column) => {
      column.style.setProperty("--animation", "slide");
      column.style.setProperty("height", "200%");
      column.innerHTML += column.innerHTML;
    });
  }, []);

  return (
    <header className="scroller-container">
      {images.map((group, index) => (
        <div key={index} className="column">
          {group.map((id) => (
            <a key={id} href="#">
              <img
                src={importImage(id)} // Dynamically load the image based on ID and format
                alt={`image-${id}`} // Use ID as alt text
              />
            </a>
          ))}
        </div>
      ))}
    </header>
  );
};

export default Scroller;
