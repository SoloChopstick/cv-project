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
        this.edit = this.edit.bind(this);
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

    edit (e) {
        this.setState({
            isSubmitted : false
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
                <div>
                    <div className="row">
                        <div className="col-sm">
                        <TextOutput fieldName="School Name: " value={location}/>
                        </div>
                        <div className="col-sm">
                        <TextOutput fieldName="Major: " value={type}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <TextOutput fieldName="Start Date: " value={startDate}/>
                        </div>
                        <div className="col-sm">
                        <TextOutput fieldName="End Date: " value={endDate}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <form>
                                <button class="btn btn-warning" type="button" value="Edit" onClick={this.edit}>Edit</button>
                            </form>
                        </div>
                    </div>
                </div>
                )
            }
            else {
                content = 
                ( 
                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-auto">
                                <label>School Name:</label>
                                <input className="form-control mb-2" type="text" name="location" onChange={this.handleChange} value={location} required></input>
                            </div>
                            <div className="col-auto">
                                <label>Major:</label>
                                <input className="form-control mb-2" type="text" name="type" onChange={this.handleChange} value={type} required></input>
                            </div>
                        </div>
                        <div className="form-row align-items-center">
                            <div className="col-auto">
                                <label>Start Date:</label>
                                <input className="form-control mb-2" type="text" name="startDate" onChange={this.handleChange} value={startDate} required></input>
                            </div>
                            <div className="col-auto">
                                <label>End Date:</label>
                                <input className="form-control mb-2" type="text" name="endDate" onChange={this.handleChange} value={endDate} required></input>
                            </div>
                        </div>
                        <div className="form-row align-items-center">
                            <div className="col-auto">
                                <input className="btn btn-success" type="submit" onClick={this.handleClick}></input>
                            </div>
                        </div>
                    </form>
                )
            }
        }
        else if (sectionName === "Work") {
            if (isSubmitted) {
                content = 
                (
                <div>
                    <div className="row">
                        <div className="col-sm">
                        <TextOutput fieldName="Company Name: " value={location}/>
                        </div>
                        <div className="col-sm">
                        <TextOutput fieldName="Job Title: " value={type}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <TextOutput fieldName="Start Date: " value={startDate}/>
                        </div>
                        <div className="col-sm">
                        <TextOutput fieldName="End Date: " value={endDate}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <form>
                                <button class="btn btn-warning" type="button" value="Edit" onClick={this.edit}>Edit</button>
                            </form>
                        </div>
                    </div>
                </div>
                )
            }
            else {
                content = (
                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-auto">
                                <label>Company Name:</label>
                                <input type="text" className="form-control mb-2" name="location" onChange={this.handleChange} value={location} required></input>
                            </div>
                            <div className="col-auto">
                                <label>Job title:</label>
                                <input type="text" className="form-control mb-2" name="type" onChange={this.handleChange} value={type} required></input>
                            </div>
                        </div>
                        <div className="form-row align-items-center">
                            <div className="col-auto">
                                <label>Start Date:</label>
                                <input type="text" className="form-control mb-2" name="startDate" onChange={this.handleChange} value={startDate} required></input>
                            </div>
                            <div className="col-auto">
                                <label>End Date:</label>
                                <input type="text" className="form-control mb-2" name="endDate" onChange={this.handleChange} value={endDate} required></input>
                            </div>
                        </div>
                        <div className="form-row align-items-center">
                            <div className="col-auto">
                                <input type="submit" className="btn btn-success" onClick={this.handleClick}></input>
                            </div>
                        </div>
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