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
        //const products = this.props.arr.map(item => <TextOutput fieldName={item} value={item}/>);
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
            <div>
                <form>
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <label>First Name:</label>
                            <input className="form-control mb-2" type="text" name="firstName" onChange={this.handleChange} required placeholder="Han"></input>
                        </div>
                        <div className="col-auto">
                            <label>Last Name:</label>
                            <input className="form-control mb-2" type="text" name="lastName" onChange={this.handleChange} required placeholder="Xie"></input>
                        </div>
                    </div>
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <label>Phone:</label>
                            <input className="form-control mb-2" type="text" name="email" onChange={this.handleChange} required></input>
                        </div>
                        <div className="col-auto">
                            <label>Email:</label>
                            <input className="form-control mb-2" type="text" name="phone" onChange={this.handleChange} required></input>
                        </div>
                    </div>
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <input type="submit" className="btn btn-dark" Click={this.handleClick}></input>
                        </div>
                    </div>
                </form>
            </div>
            )
        }
        return (
            <div className="container">
                <div className="card">
                    <div className="p-3 mb-2 bg-dark text-white">
                        <h2>{sectionName}</h2>
                        <div className="card-body">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default IntroSection