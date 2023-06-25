import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  const handleClick = (num) => {
    const splittedValue = value.split("");
    const mergeValue = [...splittedValue, num];
    const joinValues = mergeValue.join("");
    setValue(joinValues);
  };

  const erase = () => {
    // console.log(num);
    const splittedValue = value.split("");
    console.log(splittedValue);
    const mergeValue = splittedValue.pop();
    console.log(mergeValue);
    console.log(...splittedValue);
    // const mergeValue=[...splittedValue,num]
    const joinValues = splittedValue.join("");
    setValue(joinValues);
    console.log(joinValues);
  };

  const dlt = (num) => {
    setValue("");
  };

  return (
    <>
      <div className="grand">
        <div className="grand_parent">
          <div className="parent">
            <div className="input_div">
              <input value={value} className="input_text" placeholder="0" />
            </div>
            <div className="btn_div">
              <button className="child" onClick={erase}>
                Cl
              </button>
              <button className="child" onClick={dlt}>
                DEL
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("%");
                }}>
                %
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("/");
                }}>
                /
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("7");
                }}>
                7
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("8");
                }}>
                8
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("9");
                }}>
                9
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("*");
                }}>
                *
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("4");
                }}>
                4
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("5");
                }}>
                5
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("6");
                }}>
                6
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("-");
                }}>
                -
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("1");
                }}>
                1
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("2");
                }}>
                2
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("3");
                }}>
                3
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("+");
                }}>
                +
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick("0");
                }}>
                0
              </button>
              <button
                className="child"
                onClick={() => {
                  handleClick(".");
                }}>
                .
              </button>
              <button className="child">x²</button>
              <button
                className="child"
                onClick={(num) => {
                  const equal = eval(value);
                  console.log(equal);
                  setValue(String(equal));
                }}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
