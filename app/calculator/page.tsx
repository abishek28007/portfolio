"use client"

import { useState } from "react"

const operandMap = {
  "+": "+",
  "-": "-",
  "*": "×",
  "/": "÷",
};

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [operand, setOperand] = useState<string | null>(null);
  const [input, setInput] = useState("");

  const calculateResult = (op: String) => {

    if (!input) {
      if (["+", "-", "*", "/"].includes(`${op}`))
        setOperand(`${op}`);
      return;
    }

    let res = 0;
    if (operand === "+") {
      res = result + parseFloat(input);
    } else if (operand === "-") {
      res = result - parseFloat(input);
    } else if (operand === "*") {
      res = result * parseFloat(input);
    } else if (operand === "/") {
      res = result / parseFloat(input);
    } else {
      res = parseFloat(input);
    }
    switch (op) {
      case ("="): {
        setInput(`${res}`);
        setResult(0);
        setOperand(null);
        break;
      }
      default: {
        setInput("");
        setResult(res);
        setOperand(`${op}`);
      }
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 calculator text-slate-50">
      <div className="p-4 rounded-lg bg-slate-500 max-w-xs">
        <div className="bg-black p-2">
          <div className="text-right text-sm" >{result}{operandMap[operand]}</div>
          <div className="text-right text-4xl break-words" >{input || 0}</div>
        </div>
        <table className="mt-2 border-separate">
          <tbody>
            <tr>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(""); setResult(0); setOperand(null); }}>
                <div>AC</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { calculateResult("*") }}>
                <div>&times;</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { calculateResult("/") }}>
                <div>&divide;</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(input.slice(0, -1)) }}>
                <div>
                  <svg width="1rem" height="1.5rem" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44.18 44.18">
                    <g>
                      <path d="M10.625,5.09L0,22.09l10.625,17H44.18v-34H10.625z M42.18,37.09H11.734l-9.375-15l9.375-15H42.18V37.09z" />
                      <polygon points="18.887,30.797 26.18,23.504 33.473,30.797 34.887,29.383 27.594,22.09 34.887,14.797 33.473,13.383 26.18,20.676 18.887,13.383 17.473,14.797 24.766,22.09 17.473,29.383 	" />
                    </g>
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}7`) }}>
                <div>7</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}8`) }}>
                <div>8</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}9`) }}>
                <div>9</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { calculateResult("+") }}>
                <div>&#43;</div>
              </td>
            </tr>
            <tr>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}4`) }}>
                <div>4</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}5`) }}>
                <div>5</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}6`) }}>
                <div>6</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { calculateResult("-") }}>
                <div>&minus;</div>
              </td>
            </tr>
            <tr>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}1`) }}>
                <div>1</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}2`) }}>
                <div>2</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}3`) }}>
                <div>3</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" rowSpan={2} onClick={() => { calculateResult("="); }}>
                <div>&#61;</div>
              </td>
            </tr>
            <tr>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(""); }}>
                <div>C</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}0`) }}>
                <div>0</div>
              </td>
              <td className="cursor-pointer p-3 border rounded-lg text-center" onClick={() => { setInput(`${input}.`) }}>
                <div>&#46;</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
