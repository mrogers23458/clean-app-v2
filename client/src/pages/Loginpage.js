import Grassfooter from '../components/Grassfooter'

export default function Loginpage() {

    const logFun = function (e) {
        e.preventDefault()
        console.log('working')
    }
    return (
        <div className="home-box">
            <div className="home-header-box">
                <h1 className="home-header-text1">Hello,</h1>
                <h2 className="home-header-text2">Clean.</h2>
            </div>
            <div className="login-form-box">
                <form className="login-form">
                    <label className="login-username label">Username</label>
                    <input type="text" className="login-username input" placeholder="Username"></input>
                    <label type="text" className="login-password label">Password</label>
                    <input type="text" className="login-password input" placeholder="password"></input>
                    <button onClick={logFun} className="login-btn btn" type="submit">Login</button>
                </form>
            </div>
            <Grassfooter />
        </div>
    )
}