import { useState } from "react";
import "./App.css";

function App() {
  const [flowers, setFlowers] = useState([]);

  function handleGardenClick(event) {
    if (event.target.className !== "garden-space") return;

    const text = prompt("Write a memory:");
    if (!text) return;

    const photo = prompt("Paste an image URL, or leave blank:");
    const rect = event.currentTarget.getBoundingClientRect();

    const newFlower = {
      id: Date.now(),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      text,
      photo
    };

    setFlowers([...flowers, newFlower]);
  }

  return (
    <div className="garden-space" onClick={handleGardenClick}>
      {flowers.map((flower) => (
        <div
          className="memory-flower"
          key={flower.id}
          style={{ left: flower.x, top: flower.y }}
        >
          <img src="/flower.png" alt="paper flower" className="flower-img" />
          <div className="memory-popup">
            <p>{flower.text}</p>
            {flower.photo && <img src={flower.photo} alt="memory" />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;