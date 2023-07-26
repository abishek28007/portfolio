"use client"

import Image from 'next/image'
import { useReducer, useRef } from "react"

import { State, Action, Wining } from "../types/State";

// Mapping of values it will win against
const wining: { [key: string]: Wining } = {
    rock: { win: ["scissor", "lizard"], icon: "hand-fist-regular" },
    paper: { win: ["rock", "spock"], icon: "hand-regular" },
    scissor: { win: ["paper", "lizard"], icon: "hand-scissors-regular" },
    lizard: { win: ["spock", "paper"], icon: "hand-lizard-regular" },
    spock: { win: ["rock", "scissor"], icon: "hand-spock-regular" },
}
const initialState = {
    userSymbol: "",
    systemSymbol: "",
    win: 0,
};
function winner(userSymbol: string, systemSymbol: string) {
    if (userSymbol == systemSymbol) {
        return 0;
    } else {
        if (wining[userSymbol].win.includes(systemSymbol))
            return 1;
        return -1;
    }
}
function reducer(state: State, action: Action) {
    switch (action.type) {
        case "userSymbol":
            let ind = Math.floor(Math.random() * Object.keys(wining).length);
            let win = winner(action.data, Object.keys(wining)[ind]);
            return {
                userSymbol: action.data,
                systemSymbol: Object.keys(wining)[ind],
                win: state.win + win
            };
        default:
            throw new Error();
    }
}
export default function RPSLS() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef(0);

    // useEffect(() => {
    //     if (!state.isRunning) {
    //         return;
    //     }
    //     idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    //     return () => {
    //         clearInterval(idRef.current);
    //         idRef.current = 0;
    //     };
    // }, [state.isRunning]);
    return (
        <main className="rpsls flex min-h-screen flex-col items-center justify-between p-24 text-slate-50">
            <div>
                Score:
                {state.win}
            </div>
            <div className="flex gap-3">
                {Object.keys(wining).map((symb) => (
                    <div className="p-4 rounded-lg bg-slate-500 max-w-xs" key={symb}
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch({ type: "userSymbol", data: symb });
                        }}>
                        <div className='text-center pb-2 capitalize font-semibold text-slate-200'>{symb}</div>
                        <Image
                            src={`/${wining[symb].icon}.svg`}
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                        />
                    </div>
                ))}
            </div>
            <div className="flex gap-3">
                <div className="p-4 rounded-lg bg-slate-500 max-w-xs">
                    <div className='text-center pb-2 capitalize font-semibold text-slate-200'>User Choice:</div>
                    {state.userSymbol &&
                        <Image
                            src={`/${wining[state.userSymbol].icon}.svg`}
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                        />
                    }
                </div>
                <div className="p-4 rounded-lg bg-slate-500 max-w-xs">
                    <div className='text-center pb-2 capitalize font-semibold text-slate-200'>System Choice:</div>
                    {state.systemSymbol &&
                        <Image
                            src={`/${wining[state.systemSymbol].icon}.svg`}
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                        />
                    }
                </div>
            </div>
        </main>
    )
}
