import style from "../App.module.css";

export type valueProps = {
  value: string;
  isError: boolean;
};

export default function CalculatorDisplay({ value, isError }: valueProps) {
  return (
    <div className={`${style.calculatorDisplay} ${isError ? style.error : ""}`}>
      {value}
    </div>
  );
}
