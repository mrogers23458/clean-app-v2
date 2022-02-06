import Card from '../components/Card'

export default function Areas (){

    const redirectAddArea = function () {
        window.location.href = '/addarea'
    }

    const seedUser = {
        username: 'Niftee'
    }

    const seedData = [
        {
            id: '1',
            name: 'Area1',
            description: 'Desc1',
            color: 'yellow'
        },
        { 
            id: '2',
            name: 'Area2',
            description: 'Desc2',
            color: 'green'
        },
        {   
            id: '3',
            name: 'Area3',
            description: 'Desc3',
            color: 'white'
        },
        {   
            id: '4',
            name: 'Area4',
            description: 'Desc4',
            color: 'blue'
        }
    ]

    return (
        <div className="areas-box">
            <div className="areas-header">
                <h1 className="areas-header-text">Where should we start <span className="username-text">{seedUser.username}</span> ?</h1>
            </div>
            <div className="area-cards-box">
                {seedData.map((area) => {
                    return (
                        <Card props={area} key={area.id} />
                        )
                        
                    })}
            </div>
            <div className='add-an-area-box'>
                <button onClick={redirectAddArea} className='add-an-area-btn btn'>Add an area.</button>
            </div>
        </div>
    )
}