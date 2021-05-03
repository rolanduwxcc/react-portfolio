import React from 'react';
// import ghLogo from '../assets/img/github/GitHub-Mark-32px.png';
// import stackOverflowLogo from '../assets/img/github/GitHub-Mark-32px.png';
// import linkedInLogo from '../assets/img/github/GitHub-Mark-32px.png';
// import gmailLogo from '../assets/img/github/GitHub-Mark-32px.png';


// Props are passed through our functional component.
function Footer() {

    return (
            <nav className="navbar fixed-bottom">
                    <ul className="nav">
                        <h2 className="navbar-brand">Find me on:</h2>
                        <li className="nav-item">
                            <a href="mailto:rolanduwxcc@gmail.com?subject=Saw your portfolio&body=Can we talk" className="nav-link" target='_blank' rel="noreferrer">Gmail</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/rolanduwxcc" target='_blank' rel="noreferrer">
                                {/* <img src={ghLogo} alt="GitHub Logo"/> */}
                                GitHub/rolanduwxcc
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://stackoverflow.com/users/14645865/roland" className="nav-link" target='_blank' rel="noreferrer">
                                {/* <img src={stackOverflowLogo} alt="Stack Overflow Logo"/> */}
                                stack<b>overflow</b>
                            </a>
                        </li>
                        <li className="nav-item">       
                            <a href="https://www.linkedin.com/in/linkedinrowland/" className="nav-link" target='_blank' rel="noreferrer">
                                {/* <img src={linkedInLogo} alt="LinkedIn Logo"/> */}
                                LinkedIn
                            </a>
                        </li>
                    </ul>

            </nav>
    );
}

export default Footer;
