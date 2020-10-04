import React from "react"
import TextOutput from "./TextOutput"

class SubmittedContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {education, count} = this.props;
        const output = education.map((item) => console.log(item.state.school))
        /*
        for (let i = 0; i < count; i++) {
            bay.push(
            <div>
                <div className="row">
                    <div className="col-sm">
                    <TextOutput fieldName="Name: " value={education[i].school}/>
                    </div>
                    <div className="col-sm">
                    <TextOutput fieldName="Title: " value={education.key.degree}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    <TextOutput fieldName="Start Date: " value={education.key.startDate}/>
                    </div>
                    <div className="col-sm">
                    <TextOutput fieldName="End Date: " value={education.key.endDate}/>
                    </div>
                </div>
                {/*
                <div className="row">
                    <div className="col-sm">
                        <button className="btn btn-warning" type="button" value="Edit" onClick={props.onClick}>Edit</button>
                    </div>
                </div>
            </div>
            )
        }
        */

        return (
            <div>
                {output}
            </div>
        )
    }
}

export default SubmittedContent