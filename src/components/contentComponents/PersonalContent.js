import React from "react"

function PersonalContent(props) {
    return (
        <form>
            <div className="form-row align-items-center justify-content-center">
                <div className="col-auto">
                    <label>First Name:</label>
                    <input className="form-control mb-2" type="text" name="firstName" onChange={props.handleChange} value={props.data.firstName} required placeholder="Han"></input>
                </div>
                <div className="col-auto">
                    <label>Last Name:</label>
                    <input className="form-control mb-2" type="text" name="lastName" onChange={props.handleChange} value={props.data.lastName} required placeholder="Xie"></input>
                </div>
            </div>
            <div className="form-row align-items-center justify-content-center">
                <div className="col-auto">
                    <label>Phone:</label>
                    <input className="form-control mb-2" type="text" name="phone" onChange={props.handleChange} value={props.data.phone} required placeholder="514-777-8888"></input>
                </div>
                <div className="col-auto">
                    <label>Email:</label>
                    <input className="form-control mb-2" type="text" name="email" onChange={props.handleChange} value={props.data.email} required placeholder="hanw.xie@gmail.com"></input>
                </div>
            </div>
        </form>
    )
}
export default PersonalContent