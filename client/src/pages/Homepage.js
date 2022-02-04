import '../assets/css/Homepage.css'
import Grassfooter from '../components/Grassfooter'

export default function Homepage() {
    return (
        <div className="home-box">
            <div className="home-header-box">
                <h1 className="home-header-text1">Hello,</h1>
                <h2 className="home-header-text2">Clean.</h2>
            </div>
            <div className="login-form-box">
                <form className="login-form">
                    <label className="username-label">Username</label>
                    <input type="text" className="username-input" placeholder="Username"></input>
                    <label type="text" className="password-label">Password</label>
                    <input type="text" className="password-input" placeholder="password"></input>
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
            <Grassfooter />
        </div>
    )
}