import React from "react"
import TextInput from "./TextInput"

class IntroSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        }
    }

    onChange(e) {
        this.setState({
            firstName:e.target.value,
            lastName:e.target.value,
            email:e.target.value,
            phone:e.target.value
        })
    }
    handleClick(e) {
        //prevent refresh everytime pressing submit
        e.preventDefault();
        this.setState({
        })
        console.log("test")
    }
    render() {
        const {sectionName} = this.props;
        return (
            <div className="container">
                <h2>
                    {sectionName}
                </h2>
                <div className="display">
                    <form>
                        <TextInput fieldName="First Name: "/>
                        <br/>
                        <TextInput fieldName="Last Name: "/>
                        <br/>
                        <TextInput fieldName="Email: "/>
                        <br/>
                        <TextInput fieldName="Phone: "/>
                        <br/>
                        <input type="submit" onClick={this.handleClick}></input>
                    </form>
                </div>
            </div>
        )
    }
}
export default IntroSection