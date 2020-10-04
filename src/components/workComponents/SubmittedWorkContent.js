import React from "react"
import TextOutput from "../contentComponents/TextOutput"

function SubmittedWorkContent(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm">
                <TextOutput fieldName="Company: " value={props.data.company}/>
                </div>
                <div className="col-sm">
                <TextOutput fieldName="Job Title: " value={props.data.job}/>
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
export default SubmittedWorkContent