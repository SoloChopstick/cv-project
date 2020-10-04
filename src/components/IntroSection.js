import React from "react"
import PersonalContent from "./contentComponents/PersonalContent"

class IntroSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            isSubmitted: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        //prevent refresh everytime pressing submit
        e.preventDefault();
        this.setState({
            isSubmitted: true
        })
    }

    render() {
        return (
            <PersonalContent 
            data={this.state} 
            handleChange={this.handleChange} />
        )
    }
}
export default IntroSection