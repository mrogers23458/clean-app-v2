import { useState } from "react"
import Grassfooter from "../components/Grassfooter"

export default function AddArea (){
    
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


    return (
        <div className="area-add-box">
            <div className="area-add-header-box">
                <h1 className="area-add-header">Add an area.</h1>
            </div>
            <form className="add-area-form-box">
                <label className="add-area-name-lab label">Name</label>
                <input className="add-area-name-inp input" type="text"></input>
                <label className="add-area-name-lab label">Description</label>
                <input className="add-area-name-inp input" type="text"></input>
                <label className="add-area-tab-color-lab label">Choose a tab color</label>
                <select id="selectMe" defaultValue="white" onChange={handleColorSelect} className="add-area-tab-color-sel white input">
                    <option className="white input" value="white">White</option>
                    <option className="yellow input" value="yellow">Yellow</option>
                    <option className="blue input" value="blue">Blue</option>
                    <option className="green input" value="green">Green</option>
                </select>
                <button className="add-area-btn btn">Add area</button>
            </form>
            <Grassfooter />
        </div>
    )
}