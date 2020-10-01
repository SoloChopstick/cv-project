import React from "react"

function TextOutput(props) {
    return (
        <p> 
            {props.fieldName}
            {props.value}
            <br/>
        </p>
    )
}
export default TextOutput