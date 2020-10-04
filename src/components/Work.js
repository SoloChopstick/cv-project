import React from "react"
import WorkContent from "./contentComponents/WorkContent"

class Work extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            company: "",
            job: "",
            startDate: "",
            endDate: "",
            tasks: [],
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <WorkContent 
            data={this.state} 
            handleChange={this.handleChange} />
        )
    }
}

export default Work