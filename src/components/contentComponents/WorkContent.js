import React from "react"

function WorkContent(props) {
    return (
        <form> 
            <div className="form-row justify-content-center">
                <div className="col-auto">
                    <label>Company:</label>
                    <input className="form-control mb-2" type="text" name="company" onChange={props.handleChange} value={props.data.company} required placeholder="Microsoft"></input>
                </div>
                <div className="col-auto">
                    <label>Job Title:</label>
                    <input className="form-control mb-2" type="text" name="job" onChange={props.handleChange} value={props.data.job} required placeholder="Software Engineer"></input>
                </div>
            </div>
            <div className="form-row justify-content-center">
                <div className="col-auto">
                    <label>Start Date:</label>
                    <input className="form-control mb-2" type="date" name="startDate" onChange={props.handleChange} value={props.data.startDate} required></input>
                </div>
                <div className="col-auto">
                    <label>End Date:</label>
                    <input className="form-control mb-2" type="date" name="endDate" onChange={props.handleChange} value={props.data.xendDate} required></input>
                </div>
            </div>
            <div className="form-row justify-content-center">
                <div className="col-auto">
                    <input className="btn btn-success" type="button" onClick={props.increase} value="Add Section"></input>
                </div>
            </div>
        </form>
    )
}
export default WorkContent