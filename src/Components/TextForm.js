import React, { useState } from "react";

export default function TextForm(props) {
  const handleuppercaseclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("Converted to lowercase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text is Speaking!", "success");
  };


  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
}
const handleCopy = () => {
  navigator.clipboard.writeText(text); 
  props.showAlert("Text Copied!", "success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/\s+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
};

  const [text, setText] = useState("");
  return (
    <>
       <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
       <h1 className='mb-4'>{props.heading}</h1>
        <div>
         
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
          </div>
        </div>
        <button
          className="btn btn-success mx-2 "
          onClick={handleuppercaseclick}
        >
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowercAse
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
        <button  className="btn btn-info mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button  className="btn btn-danger mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-2 "style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} chracters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes take to read</p>
        <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something on the textbox for the preview!!!!!!!!!!!!!"}</p>
      </div>
    </>
  );
}
