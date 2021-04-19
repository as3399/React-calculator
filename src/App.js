import { React, useState } from "react"
import "./App.css"

function App() {
  const [Mystate, setMystate] = useState("");

  const InputDigits = (e) => {
    if (Mystate.length <= 12) {
      const length = Mystate.charAt(Mystate.length - 1)
      const mystate = Mystate;
      console.log(length, "char");

      if ((length == "+" || length == "-" || length == "/" || length == "*") && (e.target.name == "+" || e.target.name == "-" || e.target.name == "/" || e.target.name == "*")) {
        setMystate(Mystate)
      }
      else if ((mystate == "") && (e.target.name == "+" || e.target.name == "/" || e.target.name == "*")) {
        setMystate(Mystate)
      }
      else (setMystate(Mystate + e.target.name))
    }
  }
  const Clear = () => {
    setMystate("");
  }

  const Result = () => {
    const mystate = Mystate;
    const length = Mystate.charAt(Mystate.length - 1)
    console.log(length);
    if (mystate != "") {
      if (length != "+" && length != "-" && length != "/" && length != "*") {
        let ans = eval(Mystate)
        setMystate(ans.toString());
      }
      console.log(Mystate, "state")
    }

  }
  return (
    <div className="container">
      <div className="row text-right row1">
        <div className="col-12">{Mystate}</div>
      </div>
      <div className="row text-center">
        <input className="keys1 col-6" type="button" onClick={Clear} value="clear" />
        <input className="col-3 keys2" type="button" onClick={Result} name="=" value="=" />
        <input className="col-3 keys2" type="button" onClick={InputDigits} name="+" value="+" />
      </div>
      <div className="row text-center">
        <input className=" keys1 col-3" type="button" onClick={InputDigits} name="7" value="7" />
        <input className=" keys1 col-3" type="button" onClick={InputDigits} name="8" value="8" />
        <input className=" keys1 col-3" type="button" onClick={InputDigits} name="9" value="9" />
        <input className="col-3 keys2" type="button" onClick={InputDigits} name="-" value="-" />
      </div>
      <div className="row text-center">
        <input className=" keys1 col-3" type="button" onClick={InputDigits} name="6" value="6" />
        <input className=" keys1 col-3" type="button" onClick={InputDigits} name="5" value="5" />
        <input className=" keys1 col-3" type="button" onClick={InputDigits} name="4" value="4" />
        <input className="col-3 keys2" type="button" onClick={InputDigits} name="*" value="*" />
      </div>
      <div className="row text-center">
        <input className=" keys1 col-3" type="button" onClick={InputDigits} name="3" value="3" />
        <input className=" keys1 col-3" type="button" onClick={InputDigits} name="2" value="2" />
        <input className=" keys1 col-3" type="button" onClick={InputDigits} mame="1" value="1" />
        <input className="col-3 keys2" type="button" onClick={InputDigits} name="/" value="÷" />
      </div>
    </div>
  );
}

export default App;
