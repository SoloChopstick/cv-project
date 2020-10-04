import React from "react"
import EducationContent from "./contentComponents/EducationContent"

class Education extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
        }
    }

    handleChange = (e) => {
        console.log(this.state.degree)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <EducationContent 
            data={this.state} 
            handleChange={this.handleChange}
            number = {this.props.number}/>
        )
    }
}

export default Education