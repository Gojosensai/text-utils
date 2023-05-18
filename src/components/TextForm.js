import React, { useState } from 'react'

export default function TextForm(props) {
  let i=0; 
  const handleOnUpClick = ()=>{
    // console.log("Upper case btn clicked.");
    // setText("The Text is changed to upper case.")
    let newText = text.toUpperCase();
    setText(newText)
    
    props.showAlert("Converted to Uppercase!", "success")
  } 

  const handleOnLoClick = ()=>{
    // console.log("Upper case btn clicked.");
    // setText("The Text is changed to upper case.")
    let newText = text.toLowerCase();
    setText(newText)

    props.showAlert("Converted to Lowercase!", "success")
  } 

  // Creating a useState to save the extracted emails form the text
  const [extractedEmail, setExtractedEmail] = useState([])

  // Extract email from string usign regex
  const handleFindEmails = ()=>{
    let re = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    setExtractedEmail(text.match(re));
    // text.match(re).forEach(email => {setExtractedEmail(email);});

    props.showAlert("Emails Found!", "success")
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value)
  }

  // Word Counting
  const wordCount = (text)=>{
    // return target.split(" ").length
    let wordArray = text.split(" ")

    if(wordArray[0] === ""){
      return 0;
    }
    
    return wordArray.length

  }

  // const [text, setText] = useState("Enter the text here")
  const [text, setText] = useState("")

  return (
    <>
      <div className="container" style={{color: props.mode === "light"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: props.mode==="light"?"white":props.mode==="dark"?"#3b29a0":"red", color: props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleOnLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleFindEmails}>Find Emails</button>
        <div className="container mt-3">
            <h2>Your Text Summary:</h2>
            <p><b>{wordCount(text.trim())} words  {text.length} Characters</b></p>
            <p><b>{0.008 * text.split(" ").length} Minutes</b> to read</p>
        
            <p><b>Emails:</b></p> 
            {extractedEmail && extractedEmail.map(email => <p key={i++}>{email}</p>)}
            
            <h2>Preview</h2>
            <pre>{text.length>0?text:"Enter something in above textbox to preview it here."}</pre>
        </div>
      </div>
    </>
  )
}
