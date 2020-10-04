import React from "react"
import WorkContent from "./contentComponents/WorkContent"
import TaskContent from "./contentComponents/TaskContent"

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
        let tasksContent = [];
        for (let i = 0; i < this.state.taskCount; i++) {
            tasksContent.push(<TaskContent key={i} number={i+1}/>)
        }

        return ( 
            <div>
                <WorkContent 
                data={this.state} 
                handleChange={this.handleChange}
                number={this.props.number}
                addTask={this.addTask} />
                {tasksContent}
            </div>
        )
    }
}

export default Work