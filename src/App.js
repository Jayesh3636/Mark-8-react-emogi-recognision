import React, { useState } from "react";
import "./styles.css";

const headingText = "Select the emogi";

const objectdb = {
  "🕯️": "Its a burning candle",
  "📒": "A Ledger!",
  "📑": "You know Bookmark Tabs? thats it",
  "💳": "yo! Credit card",
  "📌": "Pushpin",
  "✂️": "Scissors",
  "🔑": "Key",
  "🔗": "Link",
  "🔨": "Hammer it is",
  "💊": "Pill to live",
  "🛁": "Bathtub",
  "🧼": "Soap",
  "💣": "Bomb",
  "🌡️": "Thermometer which is saying youre hot",
  "🎈": "its sweet sunny day and its a Balloon",
  "🎁": "Wrapped gift",
  "🕹️": "joystick",
  "🛢️": "You know this is useless emogie ever Oil drum",
  "🛎️": "Bellhop Bell",
  "🔋": "Battery"
};

const objectList = Object.keys(objectdb);

export default function App() {
  const [objectValue, setobjectValue] = useState("");

  function objectHandler(event) {
    const userInput = event.target.value;

    let objectValue = objectdb[userInput];

    if (objectValue === undefined) {
      objectValue = "Object not detected";
    }
    setobjectValue(objectValue);
  }

  function objectClickHandler(obj) {
    let objectValue = objectdb[obj];
    setobjectValue(objectValue);
  }

  return (
    <div className="ObjR-app">
      <h1>{headingText}</h1>
      <input
        className="input-bx"
        placeholder="Select your emogis"
        onChange={objectHandler}
      ></input>
      <div style={{ margin: "3rem", fontSize: "1.3rem" }}> {objectValue} </div>

      <h3>OUR DATABASE</h3>
      {objectList.map((obj) => {
        return (
          <span
            key={obj}
            style={{
              fontSize: "2.5rem",
              padding: "1rem 1rem",
              cursor: "pointer"
            }}
            onClick={() => objectClickHandler(obj)}
          >
            {obj}
          </span>
        );
      })}
    </div>
  );
}
