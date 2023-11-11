import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleInClick = () => {
        const invertedText = text.split('').map((char) => {
            if (char === char.toUpperCase()) {
                return char.toLowerCase();
            } else if (char === char.toLowerCase()) {
                return char.toUpperCase();
            }
            return char;
        })
            .join('');

        setText(invertedText);
    }

    const handleSeClick = () => {
        const words = text.toLowerCase().split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
        }
        setText(words.join(' '));
    }

    const handleCaClick = () => {
        const sentences = text.split(/\. |\? |! /);
        for (let i = 0; i < sentences.length; i++) {
            sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].substring(1);
        }
        setText(sentences.join('. '));
    }

    const handleCoClick = () => {
        const textArea = document.getElementById("myBox");
        textArea.select();
        document.execCommand("copy");
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleDoClick = () => {
        const download = window.confirm("What to download this as a text file?");
        if (download === true) {
            const blob = new Blob([text], { type: 'text/plain' });
            const anchor = document.createElement('a');
            anchor.href = URL.createObjectURL(blob);
            anchor.download = 'text-file.txt';
            anchor.style.display = 'none';
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
            props.showAlert("Text File downloaded!", "success");
        }
        else {
            props.showAlert("Something went wrong!", "warning");
        }
    }

    const handlePageContent = () => {
        const download = window.confirm("What to download this as a HTML page?");
        if (download === true) {
            const pageContent = document.documentElement.outerHTML;
            const blob = new Blob([pageContent], { type: 'text/html' });
            const anchor = document.createElement('a');
            anchor.href = URL.createObjectURL(blob);
            anchor.download = 'page-content.html';
            anchor.style.display = 'none';
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
            props.showAlert("HTML Page downloaded!", "success");
        }
        else {
            props.showAlert("Something went wrong!", "warning");
        }
    };

    const handleExClick = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed extra spaces!", "success");
    }

    const handleChange = (event) => {
        console.log("Click");
        setText(event.target.value);
    }

    const [text, setText] = useState('')
    const wordCount = text.trim() === '' ? 0 : text.split(' ').length;

    return (
        <>
            <div className="container custom-box p-4">
                <h1 className='display-5'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} placeholder='Start Typing...' onChange={handleChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
                <button className="btn btn-secondary mx-2" onClick={handleLoClick}>lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleInClick}>iNveRse CaSe</button>
                <button className="btn btn-danger mx-2" onClick={handleSeClick}>Sentence Case</button>
                <button className="btn btn-warning mx-2" onClick={handleCaClick}>Title case</button>
                <button className="btn btn-info mx-2" onClick={handleExClick}>Handle Space</button>
                <button className="btn btn-light mx-2" onClick={handleCoClick}>Copy to clipboard</button>
                <button className="btn btn-dark mx-2" onClick={handleClearClick}>Clear</button>
                <br />
                <div className="text-center">
                    <button className="btn btn-link btn-lg mt-3" onClick={handleDoClick}>Download Text</button>
                    <button className="btn btn-link btn-lg mt-3" onClick={handlePageContent}>Download Whole Page</button>
                </div>
            </div>
            <div className="container mt-4 custom-box2 p-3">
                <h1 className='display-6'>Your text Summary:</h1>
                <p className='lead'>Number of words: {wordCount} <br />
                    Number of Characters: {text.length} <br />
                    Number of Characters without space: {text.length - (text.split(" ").length - 1)} <br />
                    Number of spaces: {text.split(" ").length - 1} <br />
                    Minutes to read: {0.008 * wordCount}</p>
            </div>
            <div className="container p-3 custom-box3 mt-4">
                <p className="display-6"><u>Preview of text</u>!</p>
                <p className='lead'>{text.length > 0 ? text : "Please enter some text..."}</p>
            </div>
        </>
    )
}
