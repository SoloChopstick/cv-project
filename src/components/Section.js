import React from "react"

class Section extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <{props.sect}/>
            </div>
        )
    }
}
export default Section