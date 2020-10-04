import React from "react"

function EducationContent(props) {
    return (
        <div>
            <h3>School {props.number} :</h3>
            <form> 
                <div className="form-row justify-content-center">
                    <div className="col">
                        <label>School:</label>
                        <input 
                            className="form-control mb-2" 
                            type="text" 
                            name="school" 
                            onChange={props.handleChange} 
                            value={props.data.school} 
                            required 
                            placeholder="McGill University"></input>
                    </div>
                    <div className="col">
                        <label>Degree:</label>
                        <input 
                            className="form-control mb-2" 
                            type="text" 
                            name="degree" 
                            onChange={props.handleChange} 
                            value={props.data.degree} 
                            required 
                            placeholder="B.Sc. Computer Science"></input>
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
            </form>
        </div>
    )
}
export default EducationContent