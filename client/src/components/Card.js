export default function Card (data) {
    console.log(data)
    const area = data.props

    return(
        <div className="card-box">
            <div className={area.tabColor + " card-title-box"}>
                <h1 className="card-box-title-text">{area.name}</h1>
            </div>
            <div className="card-desc-box">
                <h2 className="card-desc-text">{area.description}</h2>
            </div>
        </div>
    )
}