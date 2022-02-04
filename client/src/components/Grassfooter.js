import grassImage from '../assets/images/grassnobg.png'

export default function Grassfooter () {
    const grassImg = grassImage

    return (
        <div className="grass-footer">
            <img className="grass-footer-img" src={grassImg} alt="blowing-grass"></img>
        </div>
    )
}