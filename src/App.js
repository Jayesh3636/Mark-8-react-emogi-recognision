import React, { useState } from "react";
import "./styles.css";

const headingText = "Select the emogi";

const objectdb = {
  "๐ฏ๏ธ": "Its a burning candle",
  "๐": "A Ledger!",
  "๐": "You know Bookmark Tabs? thats it",
  "๐ณ": "yo! Credit card",
  "๐": "Pushpin",
  "โ๏ธ": "Scissors",
  "๐": "Key",
  "๐": "Link",
  "๐จ": "Hammer it is",
  "๐": "Pill to live",
  "๐": "Bathtub",
  "๐งผ": "Soap",
  "๐ฃ": "Bomb",
  "๐ก๏ธ": "Thermometer which is saying youre hot",
  "๐": "its sweet sunny day and its a Balloon",
  "๐": "Wrapped gift",
  "๐น๏ธ": "joystick",
  "๐ข๏ธ": "You know this is useless emogie ever Oil drum",
  "๐๏ธ": "Bellhop Bell",
  "๐": "Battery"
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
