import React from "react"
import TextOutput from "../contentComponents/TextOutput"

function SubmittedEdContent(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm">
                <TextOutput fieldName="School: " value={props.data.school}/>
                </div>
                <div className="col-sm">
                <TextOutput fieldName="Degree: " value={props.data.degree}/>
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
        </div>
    )
}
export default SubmittedEdContent