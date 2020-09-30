import React from "react"

function TextInput(props) {
    return (
        <label> {props.fieldName}
        <input type="text"></input>
        </label>
    )
}

export default TextInput