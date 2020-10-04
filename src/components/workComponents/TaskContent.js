import React from "react"
import TextOutput from "../contentComponents/TextOutput"
class TaskContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            task: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {isSubmitted, number} = this.props;
        console.log(this.state.task)
        let content = isSubmitted ? 
        (
            <div>
                Task {number} : {this.state.task}
            </div>
        ) :
        (            
            <div>
                <form>
                    <label>Task {this.props.number}:</label>
                    <input 
                        className="form-control mb-2" 
                        type="text" 
                        name="task" 
                        onChange={this.handleChange} 
                        value={this.state.task}>
                    </input>
                </form>
            </div>
        )

        return (
            content
        )
    }
}

export default TaskContent