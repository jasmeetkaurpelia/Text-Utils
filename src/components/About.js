import React from 'react'

export default function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 jumbotron custom-box2 p-3">
                    <h1 className="display-4">Hello, there!!</h1>
                    <p className="lead">Welcome to the Text Editor App. This is a tool, named "TextUtils," which is a simple text manipulation tool that provides various text transformation features.</p>
                    <hr className="my-4" />
                    <p>Your go-to platform for text transformation and editing. We're thrilled to have you on board as we introduce you to the features and functionalities that make our app unique.</p>
                </div>
            </div>
            <div className="row">
                <div className='col my-3 mx-1 custom-box p-3'>
                    <p className="display-5">Key Features:</p>
                    <ol className="list-group list-group-flush">
                        <li className="list-group-item list-group-item-danger">
                            <u><b>Text Transformation</b></u>: With our app, you can easily convert text to uppercase, lowercase, inverse case, sentence case, and title case.
                        </li>
                        <li className="list-group-item list-group-item-success">
                            <u><b>Character Count</b></u>: Get instant character and word counts for your text, as well as the number of spaces and estimated reading time.
                        </li>
                        <li className="list-group-item list-group-item-warning">
                            <u><b>Clipboard Integration</b></u>: Copy your edited text to the clipboard for quick sharing and pasting.
                        </li>
                        <li className="list-group-item list-group-item-primary">
                            <u><b>File Downloads</b></u>: Download your text as a text file with a simple click.
                        </li>
                    </ol>
                </div>
                <div className='col my-3 custom-box p-3'>
                    <p className="display-5">How to Use?</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-group-item-danger">
                            Paste your text into the text area or start typing.
                        </li>
                        <li className="list-group-item list-group-item-success">
                            Use the buttons to transform your text.
                        </li>
                        <li className="list-group-item list-group-item-warning">
                            Explore the summary section to get insights into your text.
                        </li>
                        <li className="list-group-item list-group-item-primary">
                            Save your work, copy it to the clipboard, or download it as a text file.
                        </li>
                        <p className="lead text-center">
                             <Link to="/Text-Utils"><button className="btn btn-outline-dark btn-lg mt-4">Use Now</button></Link>
                        </p>
                    </ul>
                </div>
            </div>
        </div>
    )
}
