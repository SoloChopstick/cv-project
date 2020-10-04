import React from "react"

function WorkContent(props) {
    return (
        <div>
            <h3>Company {props.number} :</h3>
            <form> 
                <div className="form-row justify-content-center">
                    <div className="col">
                        <label>Company:</label>
                        <input 
                            className="form-control mb-2" 
                            type="text" 
                            name="company" 
                            onChange={props.handleChange} 
                            value={props.data.company} 
                            required 
                            placeholder="Microsoft"></input>
                    </div>
                    <div className="col">
                        <label>Job Title:</label>
                        <input 
                            className="form-control mb-2" 
                            type="text" 
                            name="job" 
                            onChange={props.handleChange} 
                            value={props.data.job} 
                            required 
                            placeholder="Software Engineer"></input>
                    </div>
                </div>
                <div className="form-row justify-content-center">
                    <div className="col">
                        <label>Start Date:</label>
                        <input 
                            className="form-control mb-2" 
                            type="date" 
                            name="startDate" 
                            onChange={props.handleChange} 
                            value={props.data.startDate} 
                            required></input>
                    </div>
                    <div className="col">
                        <label>End Date:</label>
                        <input 
                            className="form-control mb-2" 
                            type="date" 
                            name="endDate" 
                            onChange={props.handleChange} 
                            value={props.data.endDate} 
                            required></input>
                    </div>
                </div>
                <input 
                    className="btn btn-success" 
                    type="button" 
                    onClick={props.addTask} 
                    value="Add Task"></input>
            </form>
        </div>
    )
}
export default WorkContent