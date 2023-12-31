import {useState} from "react"
import './App.css'
import Boxes from './Components/Boxes'
import Navbar from './Components/Navbar'
import KeyboardV from "./Components/Keyboard"

function App() {

  const [boxes, setBoxes] = useState(
    [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""]
    ]
  );

  return (
    <>
      <Navbar />
      <Boxes boxes={boxes} />
      <KeyboardV setBoxes={setBoxes} />
    </>
  )
}

export default App
