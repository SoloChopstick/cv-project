import React from "react"
import TextInput from "./TextInput"
import TextOutput from "./TextOutput"

class IntroSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            isSubmitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(e) {
        //prevent refresh everytime pressing submit
        e.preventDefault();
        this.setState({
            isSubmitted: true
        })
    }

    render() {
        //deconstructors for easier calls
        const {sectionName} = this.props;
        const {firstName, lastName, email, phone, isSubmitted} = this.state;

        let content = "";
        if (isSubmitted) {
            content = 
            (
            <div className="display">
                <TextOutput fieldName="First Name: " value={firstName}/>
                <TextOutput fieldName="Last Name: " value={lastName}/>
                <TextOutput fieldName="Email: " value={email}/>
                <TextOutput fieldName="Phone: " value={phone}/>
            </div>
            )
        }
        else {
            content = (
            <div className="display">
                <form>
                    <label>First Name:</label>
                    <input type="text" name="firstName" onChange={this.handleChange} required></input>
                    <br/>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" onChange={this.handleChange} required></input>
                    <br/>
                    <label>Phone:</label>
                    <input type="text" name="email" onChange={this.handleChange} required></input>
                    <br/>
                    <label>Email:</label>
                    <input type="text" name="phone" onChange={this.handleChange} required></input>
                    <br/>
                    {/*
                    <TextInput fieldName="First Name: " name="firstName" value={firstName} onChange={() => this.handleChange} required/>
                    <TextInput fieldName="Last Name: " name="lastName" value={lastName} onChange={this.handleChange} required/>
                    <TextInput fieldName="Email: " name="email" value={email} onChange={this.handleChange} required/>
                    <TextInput fieldName="Phone: " name="phone" value={phone} onChange={this.handleChange} required/>
                    */}
                    <input type="submit" onClick={this.handleClick}></input>
                </form>
            </div>
            )
        }
        return (
            <div className="container">
                <h2>{sectionName}</h2>
                <div className="container">
                    {content}
                </div>
            </div>
        )
    }
}
export default IntroSection