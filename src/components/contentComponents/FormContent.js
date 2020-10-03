import React from "react"

function FormContent(props) {
    return (
        <form>
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <label>School Name:</label>
                    <input className="form-control mb-2" type="text" name="location" onChange={this.handleChange} value={location} required></input>
                </div>
                <div className="col-auto">
                    <label>Major:</label>
                    <input className="form-control mb-2" type="text" name="type" onChange={this.handleChange} value={type} required></input>
                </div>
            </div>
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <label>Start Date:</label>
                    <input className="form-control mb-2" type="text" name="startDate" onChange={this.handleChange} value={startDate} required></input>
                </div>
                <div className="col-auto">
                    <label>End Date:</label>
                    <input className="form-control mb-2" type="text" name="endDate" onChange={this.handleChange} value={endDate} required></input>
                </div>
            </div>
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <input className="btn btn-success" type="submit" onClick={this.handleClick}></input>
                </div>
                <div className="col-auto">
                    <input className="btn btn-success" type="button" onClick={this.increase} value="Add Section"></input>
                </div>
            </div>
        </form>
    )
}
export default FormContent