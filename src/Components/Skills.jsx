import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <div className='skills'>
        <h1 className='text-center text-white mt-5 Top'><b>My Top 3 Scrum Master Skills</b></h1>
        <div className='container skills-list mt-5 py-5'>
            <div className='skills-list-item'>
                <p> Agile Facilitation & Coaching – Skilled <br />
                in guiding teams through Agile principles and 
                Scrum ceremonies such as daily stand-ups,
                sprint planning, reviews, and retrospectives. Experienced in
                fostering a culture of continuous improvement, team ownership, and adaptability, while ensuring alignment with business goals and delivering high-value outcomes.</p>
            </div>
            <div className='skills-list-item'>
                <p>
                   Effective Communication & Collaboration
                   Strong ability to bridge gaps between stakeholders, developers, and product owners to ensure smooth project execution. Skilled in clear communication, aligning goals, and translating technical ideas for non-technical audiences. Experienced in managing expectations, resolving conflicts, and fostering teamwork across cross-functional teams.
                </p>
            </div>
            <div className='skills-list-item'>
                <p>
                    Sprint Planning & Workflow Optimization
                    Experienced in using Scrum tools such as Trello, MIRO, and JIRA to manage product backlogs, track sprint progress, and streamline team workflows. Skilled in breaking down user stories, estimating tasks, and optimizing team velocity to ensure timely and efficient delivery of project goals.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skills