import React from "react"
import SubmittedContent from "./contentComponents/SubmittedContent"
import FormContent from "./contentComponents/FormContent"

class MultiForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: "",
            type: "",
            startDate: "",
            endDate: "",
            isSubmitted: false,
            count: 1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    increase = e => {
        this.setState(prevState => {
            return ({
                count: prevState.count + 1
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
        if(sectionName === "Education") {
            content = isSubmitted ?
                    <SubmittedContent data={this.state} onClick={this.handleEdit}/> :
                    <FormContent 
                        data={this.state} 
                        handleChange={this.handleChange} 
                        handleClick={this.handleClick} 
                        increase={this.increase}/>
        }
        else if (sectionName === "Work") {
            content = isSubmitted ?
                    <SubmittedContent data={this.state} onClick={this.handleEdit}/> :
                    <FormContent 
                        data={this.state} 
                        handleChange={this.handleChange}
                        handleClick={this.handleClick} 
                        increase={this.increase}/>
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