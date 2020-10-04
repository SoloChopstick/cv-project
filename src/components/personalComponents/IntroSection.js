import React from "react"
import PersonalContent from "./PersonalContent"
import SubmittedPersonalContent from "./SubmittedPersonalContent"

class IntroSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
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
        const {isSubmitted} = this.props;

        let content = isSubmitted ? 
        <SubmittedPersonalContent data={this.state} /> : 
        (            
        <PersonalContent 
            data={this.state} 
            handleChange={this.handleChange} />
        )

        return (
            content
        )
    }
}
export default IntroSection