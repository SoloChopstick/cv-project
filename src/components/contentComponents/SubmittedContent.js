import React from "react"
import TextOutput from "./TextOutput"

function SubmittedContent(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm">
                <TextOutput fieldName="Name: " value={props.data.location}/>
                </div>
                <div className="col-sm">
                <TextOutput fieldName="Title: " value={props.data.type}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                <TextOutput fieldName="Start Date: " value={props.data.startDate}/>
                </div>
                <div className="col-sm">
                <TextOutput fieldName="End Date: " value={props.data.endDate}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <button className="btn btn-warning" type="button" value="Edit" onClick={props.onClick}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default SubmittedContent