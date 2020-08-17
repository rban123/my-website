import React from 'react';
import './App.css';
import logo from './linkedin.png'

function App() {

    const [isAboutVisible, setIsAboutVisible] = React.useState(true)
    const [isContactVisible, setIsContactVisible] = React.useState(false)

    const renderAboutPage = () => {
        if (!isAboutVisible) return
        return (
            <div className="bodyStyle">
                <header className="subHeader"><i>about me</i></header>

                <p>
                    I am a third year computer science student at UMGC. I have been programming for about 5 years mainly using Java, C++, and python. But I have taught myself React.js (along with HTMl/JSX/CSS) to build this website. I am currently serving as an enumerator at the 
                    &nbsp;
                    <a
                    className="link"
                    href="https://census.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                     U.S. Census Bureau
                    </a>, which is a temporary position, and I am currently looking for internships or entry level jobs in software engineering or web development. 
                 </p>
            </div>
        )
    }

    const renderContactPage = () => {
        if (!isContactVisible) return
        return (
            <div className="bodyStyle">
                <header className="subHeader"><i>contact me</i></header>
                <p>(443) 306-7971</p>
                <p>ryanbandler@gmail.com</p>
                <a
                    href="https://www.linkedin.com/in/ryan-bandler-6494b815b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        id="linkedinLogo"
                        src={logo}
                        alt="not found"
                        height="35"
                        width="35">
                    </img>
                </a>
            </div>
        )
    }

    const renderButtons = () => {
        return (
            <div id="buttons">
                <button
                    id="about"
                    onClick={() => {
                        setIsContactVisible(false)
                        setIsAboutVisible(true)
                    }}
                >
                    <i>about me</i>
                </button>
                <a
                    id="special"
                    href="https://github.com/rban123"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button id="github">
                        <i>github</i>
                    </button>
                </a>
                <button
                    id="contact"
                    onClick={() => {
                        setIsAboutVisible(false)
                        setIsContactVisible(true)
                    }}
                >
                    <i>contact info</i>
                </button>
            </div>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                Ryan Bandler
                {renderButtons()}
            </header>
            {renderAboutPage()}
            {renderContactPage()}
        </div>
    )
}

export default App