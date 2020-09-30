import React from "react"

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
            </div>
        )
    }
}

export default MultiForm;