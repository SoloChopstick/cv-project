import React from "react"

function FormContent(props) {
    return (
        <form> 
            <div className="form-row justify-content-center">
                <div className="col-auto">
                    <label>Name:</label>
                    <input className="form-control mb-2" type="text" name="location" onChange={props.handleChange} value={props.data.location} required></input>
                </div>
                <div className="col-auto">
                    <label>Title:</label>
                    <input className="form-control mb-2" type="text" name="type" onChange={props.handleChange} value={props.data.type} required></input>
                </div>
            </div>
            <div className="form-row justify-content-center">
                <div className="col-auto">
                    <label>Start Date:</label>
                    <input className="form-control mb-2" type="text" name="startDate" onChange={props.handleChange} value={props.data.startDate} required></input>
                </div>
                <div className="col-auto">
                    <label>End Date:</label>
                    <input className="form-control mb-2" type="text" name="endDate" onChange={props.handleChange} value={props.data.xendDate} required></input>
                </div>
            </div>
            <div className="form-row justify-content-center">
                <div className="col-auto">
                    <input className="btn btn-success" type="submit" onClick={props.handleClick}></input>
                </div>
                <div className="col-auto">
                    <input className="btn btn-success" type="button" onClick={props.increase} value="Add Section"></input>
                </div>
            </div>
        </form>
    )
}
export default FormContent