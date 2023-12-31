import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar(props) {

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
                <div className="container-fluid">
                <img className="mx-1" src="https://icones.pro/wp-content/uploads/2021/02/icone-d-ecriture-de-texte-png-symbole-jaune.png" style={{width: "3%"}} alt="" />
                    <a className="navbar-brand" href="/">{props.title}</a>
                    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                        {/* <div className="form-check form-check-inline text-light">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="danger" />
                        <label className="form-check-label" HtmlFor="inlineRadio1">Red</label>
                    </div>
                    <div className="form-check form-check-inline text-light">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="success" />
                        <label className="form-check-label" HtmlFor="inlineRadio2">Green</label>
                    </div>
                    <div className="form-check form-check-inline text-light">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="primary" />
                        <label className="form-check-label" HtmlFor="inlineRadio2">Blue</label>
                    </div> */}
                    </div>
                </div>
            </nav>
        </div >
    )
}



Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'add title here',
    about: 'add about here'
}
