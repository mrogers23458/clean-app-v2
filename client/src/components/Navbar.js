import { useNavigate } from "react-router"
import auth from "../utils/auth"


export default function Navbar () {
    console.log(auth.loggedIn())
    let navigate = useNavigate()

    const logOut = function () {
        auth.logout()
        navigate('/')
        
    }

    const displayModal = function(){
        var modalBox = document.querySelector('.web-nav-modal-box')
        var hamTop = document.querySelector('.top')
        var hamBot = document.querySelector('.bot')

        hamTop.classList.toggle('close')
        hamBot.classList.toggle('closeBot')
        modalBox.classList.toggle('display')
    }

    if (auth.loggedIn()) {
        return (
            <div className="web-nav">
                <div className="web-nav-ham-box" onClick={displayModal}>
                    <div className="ham top"></div>
                    <div className="ham bot"></div>
                </div>
                <div className="web-nav-modal-box">
                    <a href="/areas" className="modal-link offScrn">Areas</a>
                    <a href="/login" className="modal-link offScrn">Login</a>
                    <a onClick={logOut} href="/" className="modal-link offScrn">Log Out</a>
                    <a href="/register" className="modal-link offScrn">Register</a>
                </div>
            </div>
        )
    } else {
        return (
            <div className="web-nav">
            <div className="web-nav-ham-box" onClick={displayModal}>
                <div className="ham top"></div>
                <div className="ham bot"></div>
            </div>
            <div className="web-nav-modal-box">
                <a href="/login" className="modal-link offScrn">Login</a>
                <a href="/register" className="modal-link offScrn">Register</a>
            </div>
        </div>
        )
    }
}