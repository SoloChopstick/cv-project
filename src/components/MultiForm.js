import React from "react"
import TextInput from "./TextInput"
import TextOutput from "./TextOutput"

class MultiForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: "",
            type: "",
            startDate: "",
            endDate: "",
            isSubmitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick (e) {
        e.preventDefault();
        this.setState({
            isSubmitted : true
        })
    }

    newSection (e) {
        this.setState({

        })
    }

    render() {
        const {sectionName} = this.props;
        const {location, type, startDate, endDate, isSubmitted} = this.state;
        let content = "";
        if(sectionName === "Education") {
            if (isSubmitted) {
                content = 
                (
                <div className="row">
                    <div className="col-sm">
                    <TextOutput fieldName="School Name: " value={location}/>
                    </div>
                    <div className="col-sm">
                    <TextOutput fieldName="Major: " value={type}/>
                    </div>
                    <div className="col-sm">
                    <TextOutput fieldName="Start Date: " value={startDate}/>
                    </div>
                    <div className="col-sm">
                    <TextOutput fieldName="End Date: " value={endDate}/>
                    </div>
                </div>
                )
            }
            else {
                content = 
                (
                    <form>
                        <label>School Name:</label>
                        <input type="text" name="location" onChange={this.handleChange} required></input>
                        <br/>
                        <label>Major:</label>
                        <input type="text" name="type" onChange={this.handleChange} required></input>
                        <br/>
                        <label>Start Date:</label>
                        <input type="text" name="startDate" onChange={this.handleChange} required></input>
                        <br/>
                        <label>End Date:</label>
                        <input type="text" name="endDate" onChange={this.handleChange} required></input>
                        <br/>
                        <input type="submit" onClick={this.handleClick}></input>
                    </form>
                )
            }
        }
        else if (sectionName === "Work") {
            if (isSubmitted) {
                content = 
                (
                <div className="display">
                    <TextOutput fieldName="Company Name: " value={location}/>
                    <TextOutput fieldName="Job Title: " value={type}/>
                    <TextOutput fieldName="Start Date: " value={startDate}/>
                    <TextOutput fieldName="End Date: " value={endDate}/>
                </div>
                )
            }
            else {
                content = (
                    <form>
                        <label>Company Name:</label>
                        <input type="text" name="location" onChange={this.handleChange} required></input>
                        <br/>
                        <label>Job title:</label>
                        <input type="text" name="type" onChange={this.handleChange} required></input>
                        <br/>
                        <label>Start Date:</label>
                        <input type="text" name="startDate" onChange={this.handleChange} required></input>
                        <br/>
                        <label>End Date:</label>
                        <input type="text" name="endDate" onChange={this.handleChange} required></input>
                        <br/>
                        <input type="submit" onClick={this.handleClick}></input>
                    </form>
                )
            }
        }

        return (
            <div className="container">
                <div className="card">
                    <div className="p-3 mb-2 bg-dark text-white">
                        <div className="card-body">
                            <h2>
                                {sectionName}
                            </h2>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MultiForm;