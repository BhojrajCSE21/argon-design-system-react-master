import React from "react";
import { Progress } from "reactstrap";

class Progresses extends React.Component {
  render() {
    const { skills } = this.props;

    return (
      <>
        {skills.map((skill, index) => (
          <div key={index} className="progress-wrapper mb-4">
            <div className="d-flex align-items-center">
              {/* Skill Image */}
              <img
                src={skill.image}
                alt={skill.name}
                className="mr-3"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
              <div className="progress-info w-100">
                {/* Skill Name and Percentage */}
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                {/* Progress Bar */}
                <Progress max="100" value={skill.percentage} color={skill.color || "default"} />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Progresses;
