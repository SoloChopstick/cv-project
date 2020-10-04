import React from "react"
import IntroSection from "../personalComponents/IntroSection"
import Education from "../educationComponents/Education"
import Work from "../workComponents/Work"

function SectionCard(props) {
    let content = ""
    if (props.title === "PERSONAL INFO") content=<IntroSection />
    else if (props.title === "EDUCATION") content=<Education />
    else if (props.title === "WORK EXPERIENCE") content=<Work />
    return (
        <div className="card">
            <div className="p-3 mb-2 bg-dark text-white">
                <h2>{props.sectionName}</h2>
                <div className="card-body">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default SectionCard