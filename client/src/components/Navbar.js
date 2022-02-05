export default function Navbar () {

    const displayModal = function(){
        var modalBox = document.querySelector('.web-nav-modal-box')
        var hamTop = document.querySelector('.top')
        var hamBot = document.querySelector('.bot')

        hamTop.classList.toggle('close')
        hamBot.classList.toggle('closeBot')
        modalBox.classList.toggle('display')
    }

    return (
        <div className="web-nav">
            <div className="web-nav-ham-box" onClick={displayModal}>
                <div className="ham top"></div>
                <div className="ham bot"></div>
            </div>
            <div className="web-nav-modal-box">
                <a href="/" className="modal-link offScrn">Home</a>
                <a href="/login" className="modal-link offScrn">Login</a>
                <a href="/register" className="modal-link offScrn">Register</a>
            </div>
        </div>
    )
}