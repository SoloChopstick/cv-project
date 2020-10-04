import React from "react"

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
        return (
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
    }
}

export default TaskContent