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
            isSubmitted: false,
            education: [],
            educationCount: 1,
            work: [],
            workCount: 1,
        }
    }

    addSchool = e => {
        this.setState(prevState => {
            return ({
                educationCount: prevState.educationCount + 1
            })
        })
    }

    addWork = e => {
        this.setState(prevState => {
            return ({
                workCount: prevState.workCount + 1
            })
        })
    }

    deleteSchool = e => {
        this.setState(prevState => {
            return ({
                educationCount: prevState.educationCount - 1
            })
        })
    }

    deleteWork = e => {
        this.setState(prevState => {
            return ({
                workCount: prevState.workCount - 1
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
        const {isSubmitted, education, work, educationCount, workCount} = this.state;

        //create the number of desired schools
        let educationContent = [];
        for (let i = 0; i < this.state.educationCount; i++) {
            educationContent.push(<Education key={i} number={i+1}/>);
        }

        //create the number of desired work experiences
        let workContent = [];
        for (let i = 0; i < this.state.workCount; i++) {
            workContent.push(<Work key={i} number={i+1}/>);
        }

        let content = isSubmitted ? <SubmittedContent education={educationContent} count={educationCount}/> :
            (            
            <div className="container">
                <div className="card">
                    <div className="p-3 mb-2 bg-dark text-white">
                        <h2> PERSONAL INFO </h2>
                        <div className="card-body">
                            <IntroSection />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-3 mb-2 bg-dark text-white">
                        <h2> EDUCATION </h2>
                        <div className="card-body">
                            {educationContent}
                        </div>
                        <div className="row">
                            <div className="col">
                                <input className="btn btn-success" type="button" onClick={this.addSchool} value="Add School"></input>
                            </div>
                            <div className="col">
                                <input className="btn btn-danger" type="button" onClick={this.deleteSchool} value="Del School"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-3 mb-2 bg-dark text-white">
                        <h2> WORK EXPERIENCE </h2>
                        <div className="card-body">
                            {workContent}
                        </div>
                        <div className="row">
                            <div className="col">
                                <input className="btn btn-success" type="button" onClick={this.addWork} value="Add Work"></input>
                            </div>
                            <div className="col">
                                <input className="btn btn-danger" type="button" onClick={this.deleteWork} value="Del Work"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <input className="btn btn-success" type="submit" onClick={this.handleClick} value="SUBMIT"></input>
                </div>

                {/*
                <SectionCard title="PERSONAL INFO"/>
                <SectionCard title="EDUCATION"/>
                <input className="btn btn-success" type="button" onClick={this.addSchool} value="Add School"></input>
                <SectionCard title="WORK EXPERIENCE"/>
                <input className="btn btn-success" type="button" onClick={this.addWork} value="Add Section"></input>
                <input className="btn btn-success" type="submit" onClick={this.handleClick}></input>
                */}
            </div>
            );
        return (
            content
        )
    }
}

export default MultiForm;