import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  const handleUpCLick=()=>{
    // console.log("Button Clicked");
    let newText=text.toUpperCase();
    setText(newText);
    (newText.length>0)?props.showalert("Converted to upperCase","success"):props.showalert("Text Box Empty","warning")
  }
  const handleloCLick=()=>{
    // console.log("Button Clicked");
    let newText=text.toLowerCase();
    setText(newText);
    (newText.length>0)?props.showalert("Converted to lowercase","success"):props.showalert("Text Box Empty","warning")
  }
  const handleOnChange=(event)=>{
    // console.log("onchange Clicked");
    setText(event.target.value);
  }
  const handleClear=()=>{
    (text.length>0)?props.showalert("Text Cleared","success"):props.showalert("Text Box Empty","warning")
    setText('');
    
  }
  const handelCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showalert("Copied!!!","success")
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text,setText]=useState("");
  let numOfWords=text.split(" ").filter(elements=>![''].includes(elements)).length;
  let characters=0;
  // console.log(String.fromCharCode(13));
  for(var i=0;i<text.length;i++){
    if(text[i]!=' ' && text[i]!=String.fromCharCode(13) )characters++;
  }
  return (
    <>
        <div className="container my-3" style={{color:props.mode=='dark'?'white':'black'}}>
            <label htmlFor="mybox" className="form-label"><h1>{props.heading}</h1></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=='dark'?'grey':'white',color:props.mode=='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            <button className="btn btn-primary my-2 mx-1" onClick={handleUpCLick}>Convert to Upper Case</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleloCLick}>Convert to Lower Case</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handelCopy}>Copy Text</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode=='dark'?'white':'black'}}>
          <h2>Your text Summary</h2>
          <p>{numOfWords} words and {characters} charachters</p>
          <p>{0.008*(numOfWords)} Minutes to read</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
    </>
  )
}
Textform.propTypes={
    heading:PropTypes.string
}
Textform.defaultProps={
    heading:"ENTER SOMETHING..."
}
