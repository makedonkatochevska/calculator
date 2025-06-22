import { useCallback, useEffect, useState } from "react";
import { evaluate } from "mathjs";
import style from "../App.module.css";
import CalculatorDisplay from "./CalculatorDisplay";
import Button from "./Button";

const operators = [".", "*", "/", "+", "-", "(", ")"];
const mathOperators = ["+", "-", "*", "/"];

export default function Calculator() {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [isResult, setIsResult] = useState(false);

  //Handle Click
  const handleClick = useCallback(
    (textValue: string) => {
      //fresh starts after result
      if (isResult) {
        setValue(textValue);
        setIsError(false);
        setIsResult(false);
        return;
      }

      //VALIDATIONS
      if (
        (value.length === 0 && operators.includes(textValue)) ||
        (textValue === "." &&
          value
            .split(/[\+\-\*\/\(\)]/)
            .pop()
            ?.includes(".")) ||
        (textValue === value.charAt(value.length - 1) &&
          operators.includes(textValue)) ||
        (textValue === ")" && !value.includes("(")) ||
        (operators.includes(textValue) &&
          operators.includes(value.slice(-1)) &&
          textValue !== "(")
      ) {
        setIsError(true);
        return;
      }

      setIsError(false);

      setValue((prev) => prev + textValue);
      console.log("value", value);
    },
    [value, isResult, operators]
  );

  //Handle Reset
  const handleReset = useCallback((textValue: string) => {
    if (textValue === "C" || textValue === "AC") {
      setValue("");
      setIsError(false);
      setIsResult(false);
    }
  }, []);

  //Handle Equal
  const handleEqual = useCallback(
    (textValue: string) => {
      if (
        (textValue === "=" && value.length === 0) ||
        mathOperators.includes(value.slice(-1))
      ) {
        return;
      }

      try {
        const result = evaluate(value);
        setValue(result.toString());
        setIsError(false);
        setIsResult(true);
      } catch (error) {
        console.error("Invalid expression", error);
        setValue("Error");
        setIsError(true);
        setIsResult(false);
      }
    },
    [value, mathOperators]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      const validKeys = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "*",
        "/",
        ".",
        "(",
        ")",
        "Enter",
        "Backspace",
        "Escape",
      ];

      if (!validKeys.includes(key)) return;

      event.preventDefault();

      if (key === "Enter") {
        handleEqual("=");
      } else if (key === "Backspace") {
        setValue((prev) => prev.slice(0, -1));
        setIsError(false);
      } else if (key === "Escape") {
        handleReset("AC");
      } else {
        handleClick(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [value, isError]);

  return (
    <div className={style.calculator}>
      <CalculatorDisplay value={value} isError={isError} />
      <div className={style.row}>
        <Button text={"("} onClick={handleClick} />
        <Button text={")"} onClick={handleClick} />
        <Button text={"C"} onClick={handleReset} />
        <Button text={"AC"} onClick={handleReset} />
      </div>
      <div className={style.row}>
        <Button text={"7"} onClick={handleClick} />
        <Button text={"8"} onClick={handleClick} />
        <Button text={"9"} onClick={handleClick} />
        <Button text={"/"} onClick={handleClick} />
      </div>
      <div className={style.row}>
        <Button text={"4"} onClick={handleClick} />
        <Button text={"5"} onClick={handleClick} />
        <Button text={"6"} onClick={handleClick} />
        <Button text={"*"} onClick={handleClick} />
      </div>
      <div className={style.row}>
        <Button text={"1"} onClick={handleClick} />
        <Button text={"2"} onClick={handleClick} />
        <Button text={"3"} onClick={handleClick} />
        <Button text={"-"} onClick={handleClick} />
      </div>
      <div className={style.row}>
        <Button text={"."} onClick={handleClick} />
        <Button text={"0"} onClick={handleClick} />
        <Button text={"="} onClick={handleEqual} />
        <Button text={"+"} onClick={handleClick} />
      </div>
    </div>
  );
}
