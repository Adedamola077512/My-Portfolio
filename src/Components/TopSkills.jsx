import React from 'react'
import './TopSkills.css'
const TopSkill = () => {
  return (
    <div className='topSkill' id='skill'>
        <h1 className='text-center'><b>MY TOP SKILLS</b></h1>
        <div className='container skill-flex'>
            <div className='skill'>
                <h5><b>Administrative Assistance</b></h5>
                <p className='text-paragraph'>
                    I am proficient in email management, <br />
                    data entry, scheduling, calendar management, <br />
                    travel planning, and online research. I excel at <br />
                    staying organized, handling multiple tasks <br />
                    efficiently, and supporting day-to-day administrative broperations to 
                    ensure smooth workflow and time management.
                </p>
            </div>
            <div className='skill'>
                <h5><b>Scrum Master</b></h5>
                <p className='text-paragraph'>
                    Experienced in handling product lifecycles, <br />
                    task prioritization, and timeline management <br />
                    for product and project development. Skilled in <br />
                    coordinating cross-functional teams, tracking <br />
                    milestones, and ensuring timely delivery while <br />
                    maintaining quality and alignment with business <br />goals.
                </p>
            </div>
            <div className='skill'>
                <h5><b>Scrum Tools</b></h5>
                <p className='text-paragraph'>
                    Experienced in using Trello, MIRO, and <br />
                    JIRA for task management, team collaboration, <br />
                    and Agile workflow optimization. Proficient in <br />
                    organizing sprints, tracking progress, and <br />
                    enhancing team visibility to improve efficiency <br />and ensure project 
                    alignment.
                </p>
            </div>
        </div>
    </div>
  )
}

export default TopSkill