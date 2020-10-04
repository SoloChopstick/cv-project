import React from "react"
import TextOutput from "../contentComponents/TextOutput"

function SubmittedPersonalContent (props) {
        /*
        const {education, count} = this.props;
        const output = education.map((item) => console.log(item.state.school))
        for (let i = 0; i < count; i++) {
            bay.push(
        */

    return (
        <div>
            <div className="row">
                <div className="col-sm">
                <TextOutput fieldName="First Name: " value={props.data.firstName}/>
                </div>
                <div className="col-sm">
                <TextOutput fieldName="Last Name: " value={props.data.lastName}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                <TextOutput fieldName="Phone: " value={props.data.phone}/>
                </div>
                <div className="col-sm">
                <TextOutput fieldName="Email: " value={props.data.email}/>
                </div>
            </div>
        </div>
    )
}

export default SubmittedPersonalContent