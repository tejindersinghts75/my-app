import React, {useState} from 'react'



function Textform(props)


{
  
  const clickToChange =()=>
  {
    let newText = heading.toUpperCase();
    setHead(newText)
    
  }

  const[heading,setHead]= useState('It will go uppercase');


 
  
  const handleUpClick =()=>
  {
    let texts = text.toUpperCase();
    setText(texts)
  }
  
  const handleOnChange =(event)=>{
    setText(event.target.value)
  }
  const [text,setText] = useState('');
  //setText("what");
  
  //Use of state to to enable dark mode
  const [myStyle, setBtnText]= useState("Enable  Dark Mode")

  const clickToCopy =()=>
  {
    console.log("I am copy")
    var text= document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  return(
   <>
   <div className='container' >
      <div className="mb-3">
          <h1>{heading}</h1>
          <textarea  className="form-control"   onChange={handleOnChange} id="myBox" rows="8"></textarea>
          <p>{text}</p>
      </div>
      
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary" onClick={clickToChange}>   Click to Show    </button>
      <button className="btn btn-primary" onClick={clickToCopy}>   Click to Show    </button>
  </div>
  <div className='container'>
    <p>{text.split(" ").length} words & {text.length} characters </p>
    <p>{text}</p>
    <p>{0.008*text.split(" ").length}</p>
 
  </div>


   


  
</>
  )

}
export default Textform;
