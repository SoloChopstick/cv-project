import React from "react"
import SubmittedContent from "./contentComponents/SubmittedContent"
import FormContent from "./contentComponents/FormContent"
import Education from "./Education"
import Work from "./Work"
import IntroSection from "./IntroSection"
import SectionCard from"./SectionCard"

class MultiForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: "",
            type: "",
            startDate: "",
            endDate: "",
            isSubmitted: false,
            education: [],
            educationCount: 1,
            work: [],
            workCount: 1,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    addSchool = e => {
        this.setState(prevState => {
            return ({
                [e.target.name]: prevState.educationCount + 1
            })
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            isSubmitted : true
        })
    }

    handleEdit = (e) => {
        this.setState({
            isSubmitted : false
        })
    }

    render() {
        const {sectionName} = this.props;
        const {location, type, startDate, endDate, isSubmitted} = this.state;
        let content = "";
        return (
            <div className="container">
                <SectionCard title="PERSONAL INFO"/>
                <SectionCard title="EDUCATION"/>
                <SectionCard title="WORK EXPERIENCE"/>
                <input className="btn btn-success" type="submit" onClick={this.handleClick}></input>
            </div>
        )
        /*
        if(sectionName === "Education") {
            content = isSubmitted ?
                    <SubmittedContent data={this.state} onClick={this.handleEdit}/> :
                    <FormContent 
                        data={this.state} 
                        handleChange={this.handleChange} 
                        handleClick={this.handleClick} 
                        increase={this.increase}
                        location="School"
                        type="Degree"/>
        }
        else if (sectionName === "Work") {
            content = isSubmitted ?
                    <SubmittedContent data={this.state} onClick={this.handleEdit}/> :
                    <FormContent 
                        data={this.state} 
                        handleChange={this.handleChange}
                        handleClick={this.handleClick} 
                        increase={this.increase}
                        location="Company"
                        type="Job Title"/>
        }
        */
    }
}

export default MultiForm;