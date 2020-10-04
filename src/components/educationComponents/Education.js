import React from "react"
import EducationContent from "./EducationContent"
import SubmittedEdContent from "./SubmittedEdContent"

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
        console.log(this.state.school)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {isSubmitted} = this.props;

        let content = isSubmitted ? 
        <SubmittedEdContent data={this.state} /> : 
        (            
        <EducationContent 
            data={this.state} 
            handleChange={this.handleChange}
            number = {this.props.number}/>
        )

        return (
            content
        )
    }
}

export default Education