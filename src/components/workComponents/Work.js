import React from "react"
import WorkContent from "./WorkContent"
import TaskContent from "./TaskContent"
import SubmittedWorkContent from "./SubmittedWorkContent"

class Work extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            company: "",
            job: "",
            startDate: "",
            endDate: "",
            tasks: [],
            taskCount: 0,
        }
    }

    addTask = (e) => {
        this.setState(prevState => {
            return ({
                taskCount: prevState.taskCount + 1
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {isSubmitted} = this.props;
        let tasksContent = [];
        for (let i = 0; i < this.state.taskCount; i++) {
            tasksContent.push(<TaskContent key={i} number={i+1} isSubmitted={isSubmitted}/>)
        }

        let content = isSubmitted ? 
        <div>
            <SubmittedWorkContent data={this.state}/>
            {tasksContent}
        </div>
        : 
        (            
        <div>
            <WorkContent 
            data={this.state} 
            handleChange={this.handleChange}
            number={this.props.number}
            addTask={this.addTask} />
            {tasksContent}
        </div>
        )

        return ( 
            content
        )
    }
}

export default Work