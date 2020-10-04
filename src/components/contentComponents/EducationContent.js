import React from "react"

function EducationContent(props) {
    return (
        <form> 
            <div className="form-row justify-content-center">
                <div className="col-auto">
                    <label>School:</label>
                    <input className="form-control mb-2" type="text" name="school" onChange={props.handleChange} value={props.data.school} required placeholder="McGill University"></input>
                </div>
                <div className="col-auto">
                    <label>Degree:</label>
                    <input className="form-control mb-2" type="text" name="degree" onChange={props.handleChange} value={props.data.degree} required placeholder="B.Sc. Computer Science"></input>
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
export default EducationContent