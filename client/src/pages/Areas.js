import { ApolloClient, ApolloConsumer, ApolloProvider, useApolloClient, useQuery } from '@apollo/client'
import auth from '../utils/auth'
import Card from '../components/Card'
import { GET_USER } from '../utils/query'
import { useNavigate } from 'react-router'

export default function Areas (){

    let navigate = useNavigate()
    let client = useApolloClient()
    

    const loggedInUser = auth.getUser().data
    
    const id = loggedInUser._id
    

    const redirectAddArea = function () {
       navigate(`/addarea${id}`)
    }

    const {data, loading, error} = useQuery(GET_USER, {
        variables: {
            id: id
        }
    })

    if (error) {
        console.error(error)
    }

    if(!data) {
        return (<div>
            loading...
        </div>)
    }

    if (loading) {
        return (
            <div>
                loading
            </div>
        )
    }
    
    client.reFetchObservableQueries(GET_USER)

    if (data?.user) {
        
        const { user } = data

        const areaData = user.areas
        return (
            <div className="areas-box">
                <div className="areas-header">
                    <h1 className="areas-header-text">Where should we start <span className="username-text">{user.username}</span> ?</h1>
                </div>
                <div className="area-cards-box">
                     {areaData.map((area) => {
                        return (
                            <Card props={area} key={area._id} />
                            )
                            
                        })}
                </div>
                <div className='add-an-area-box'>
                    <button onClick={redirectAddArea} className='add-an-area-btn btn'>Add an area.</button>
                </div>
            </div>
        )
    }
}