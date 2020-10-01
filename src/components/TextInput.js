import React from "react"

function TextInput(props) {
    return (
        <div>
            <label> 
                {props.fieldName}
            </label>
            <input type="text"></input>
            <br/>
        </div>
    )
}

export default TextInput