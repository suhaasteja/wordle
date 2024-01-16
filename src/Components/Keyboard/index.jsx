import { useEffect, useRef, useState } from "react"
import "./styles.css"
import Keyboard from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";

const keys = [
  [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p"
  ],
  [
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l"
  ],
  [
    "Enter",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "Bksp"
  ]
]

function KeyboardV({ setBoxes }) {

  // const answer = "aware";

  useEffect(() => {
    window.addEventListener("keyup", e => {
      console.log(e.key);
    })
  }, [])

  // const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const keyboard = useRef();


  // const onChange = val => {
  //   console.log("val changed", val);
  //   if (val.length > 5) return;
  //   const arr = val.split("");
  //   console.log(arr);
  //   setBoxes(prev => {
  //     prev[count].forEach((el, i) => {
  //       prev[count][i] = arr[i] || "";
  //     })
  //     return [...prev];
  //   })


  // };

  // const onKeyPress = button => {
  //   console.log("Button pressed", button);
  //   if (button === "{enter}") {
  //     setCount(prev => prev + 1);
  //     keyboard.current.clearInput();
  //   }

  // };

  const handleKeyboardClick = (key) => {
    console.log(key);
    // add into boxes
    // setBoxes(prev => {
    //   const newPrev = prev.map(arr => {
    //     const l = arr.length;
    //   });
      
    //   return newPrev;
    // })
  }

  return (
    <div>
      {/* <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName="default"
        layout={{
          default: [
            "q w e r t y u i o p",
            "a s d f g h j k l",
            "{enter} z x c v b n m {bksp}",
          ]
        }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      /> */}

      <div className="keyboard-container">
        {
          keys.map((row, i) => {
            return (
              <div className="keyboard-row" key={i}>
                {
                  row.map((k, i) => {
                    return (
                      <div
                        className="keyboard-key" key={i}
                        onClick={() => handleKeyboardClick(k)}
                        >{k}</div>
                    )
                  })
                }
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default KeyboardV