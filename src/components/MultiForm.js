import React from "react"
import TextInput from "./TextInput"

class MultiForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: "",
            type: "",
            startDate: "",
            endDate: "",
        }
    }

    render() {
        const {sectionName} = this.props;
        return (
            <div className="container">
                <h2>
                    {sectionName}
                </h2>
                <form>
                    <TextInput fieldName="School: "/>
                    <TextInput fieldName="Major: "/>
                    <TextInput fieldName="Start Date: "/>
                    <TextInput fieldName="End Date: "/>
                </form>
            </div>
        )
    }
}

export default MultiForm;