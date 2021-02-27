import React from 'react'

function List() {
    const skill = [
        "React", "JavaScript", "HTML", "CSS/SCSS", "jQuery", "Bootstrap", "Handlebars", "Heroku", "Git", "MySql", "MongoDB", "Express", "Node"
    ]
    const skillList = skill.map((item) =>
        <tr>
            <td>
                {item}
            </td>
        </tr>
    )

    return (

        <table>
            <thead>
                <tr>
                    <th>Technical Skills</th>
                </tr>
            </thead>
            <tbody className="text-right">
                {skillList}
            </tbody>
        </table>

    )
};

export default List;