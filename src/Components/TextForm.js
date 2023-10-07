import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to Lowercase!", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text).then(
            () => {
                props.showAlert("Text Copied Successfully", "success");
            },
            () => {
                props.showAlert("Copying Failed!", "danger");
            }
        )
    }

    // const handleCapClick = () => {
    //     let newText = text.toLowerCase();
    //     newText = newText.split(".");
    //     // for(let i=0;i<newText.length;i++){
    //     //     newText[i]=newText[i].charAt(0).toUpperCase()+newText[i].slice(1);
    //     // }
    //     newText.join('');
    //     setText(newText);
    //     console.log(newText);
    // }

    const handleOnChange = (event) => {
        // console.log("change");
        setText(event.target.value);
        // wordCount(text);
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text cleared!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All extra spaces are removed!", "success");
    }


    const [text, setText] = useState('');

    // const [count,setCount] = useState(0);

    // const wordCount = (text) => {
    //     let newText = text.split(/[ ]+/);
    //     let c = newText.length;
    //     if(newText[c-1]===''){
    //         setCount(c-1);
    //     } 
    //     else {
    //         setCount(c);
    //     }
    // }

    return (
        <>
            <div className='container my-4' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='text-center'>{props.heading}</h1>
                <div className="mb-3 ">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(40 54 93)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'success' : 'primary'} mx-1 my-1 btn-sm`} onClick={handleUpClick}>Covert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'success' : 'primary'} mx-1 my-1 btn-sm`} onClick={handleLoClick}>Covert to Lowercase</button>
                {/* <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'success':'primary'} mx-1 my-1 btn-sm`} onClick={handleCapClick}>Capitalize Text</button> */}
                
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'success' : 'primary'} mx-1 my-1 btn-sm`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'success' : 'primary'} mx-1 my-1 btn-sm`} onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'success' : 'primary'} mx-1 my-1 btn-sm`} onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Text Summary</h3>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                {/* <p>{count} words and {text.length} characters.</p> */}
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter text in box above to see preview of it here"}</p>
            </div>
        </>

    )
}
