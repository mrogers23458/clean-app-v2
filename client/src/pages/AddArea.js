import { useState } from "react"
import { ADD_AREA } from "../utils/mutation"
import Grassfooter from "../components/Grassfooter"
import { useMutation } from "@apollo/client"
import { useParams } from "react-router"

export default function AddArea (){

    const params = useParams()
    console.log(params)
    const id = params.id.trim()

    const[formData, setFormData] = useState(
        {
            name: '',
            description: '',
            tabColor: '',
            id: id
        }
    )

    const [addArea, {data, loading, error}] = useMutation(ADD_AREA)

    const handleUpdate = function (e) {
        console.log(e.target.name)
        console.log(formData)

        handleColorSelect(e);

        return setFormData(
             {
                 ...formData, [e.target.name]: e.target.value
             }
         )
    }
    
    const handleColorSelect = function (e) {
        var mySelector = document.getElementById('selectMe')
        const colorValue = e.target.value

        if (colorValue === 'white'){
            mySelector.setAttribute("style", "background: white; color: var(--alt-bg-color);")
        } 
        if (colorValue === 'blue' ){
            mySelector.setAttribute("style", "background: var(--main-bg-color); color: white;")
        } 
        if (colorValue === 'green' ){
            mySelector.setAttribute("style", "background: var(--alt-bg-color2); color: white;")
        } 
        if (colorValue === 'yellow' ){
            mySelector.setAttribute("style", "background: var(--alt-bg-color); color: white")
        } 
    }

    const handleAddArea = async (e) => {
        e.preventDefault()
        console.log(formData)

        setFormData({
            ...formData, [e.target.name]: e.target.value
        })

        console.log(formData)

        if (formData.name && formData.tabColor && formData.description) {
           const {name, description, tabColor, id} = formData
           console.log(formData)
           console.log('id is here'+id)
           
            const {data, error, loading } = await addArea({
                variables: {
                    id,
                    name,
                    description,
                    tabColor,
                }
            }).catch((err) => {
                console.log(err)
            })

            if (data) {
                console.log(data)
            }
        }
    }


    return (
        <div className="area-add-box">
            <div className="area-add-header-box">
                <h1 className="area-add-header">Add an area.</h1>
            </div>
            <form className="add-area-form-box">
                <label className="add-area-name-lab label">Name</label>
                <input className="add-area-name-inp input" type="text" name="name" onChange={handleUpdate}></input>
                <label className="add-area-name-lab label">Description</label>
                <input className="add-area-name-inp input" type="text" name="description" onChange={handleUpdate}></input>
                <label className="add-area-tab-color-lab label">Choose a tab color</label>
                <select id="selectMe" defaultValue="white" onChange={handleUpdate} name="tabColor" className="add-area-tab-color-sel white input">
                    <option className="white input" value="white">White</option>
                    <option className="yellow input" value="yellow">Yellow</option>
                    <option className="blue input" value="blue">Blue</option>
                    <option className="green input" value="green">Green</option>
                </select>
                <button onClick={handleAddArea} className="add-area-btn btn">Add area</button>
            </form>
            <Grassfooter />
        </div>
    )
}