import React, { Fragment } from 'react'
import './resumeVersion.scss';

const ResumeVersion = ({ version }) => {

  const upToDateDisplay = <><div className=" section upper-section up-to-date-section">
    <div className="download-updated-container">
      <h1 className="download-updated-title">Resume is up-to-date</h1>
      <p className="download-updated-text">Its worth checking back from time to time because if I acquire new noteworthy skills or create some cool projects since you received my resume, they would be displayed here.</p>
      <p className="download-updated-text download-updated-text-downer">Until then, you can see my current projects.</p>
      <a href="/#projects">My projects</a>
    </div>
  </div></>

  const resumeVersionList = [
    {
      date: "2023-05-11",
      updates: ["Test"]
    },
    {
      date: "2023-05-12",
      updates: ["I learned typescript by making \"Typescript projects\"."]
    }
  ]

  if (!version || version == resumeVersionList.at(-1).date) {
    return (upToDateDisplay)
  }

  let index = null;
  for (let i = 0; i < resumeVersionList.length; i++) {
    if (resumeVersionList[i].date == version) {
      index = i;
      break;
    }
  }

  if (index === null) {
    return (upToDateDisplay)
  } else {
    const updateList = resumeVersionList.slice(index).reverse();
    return (
      <>
        <div className=" section upper-section">
          <div className="download-updated-container">
            <h1 className="download-updated-title">New resume available</h1>
            <p className="download-updated-text">Since you received my resume, I have extended my knowledge. Check out my new projects and capabilities!</p>
            <a href="/assets/pdf/resume_en.pdf" download="Resume István Pataki">Download updated resume</a>
          </div>
          <div className="triangle-divier"></div>
        </div>
        <div className="downer-section section">
          <h2>New skills that I acquired</h2>
          {updateList.map((updateItem, idx) => {
            return (
              <Fragment key={idx}>
                <span className="update-date">{updateItem.date}</span>
                <ul>
                  {updateItem.updates.map((update, idy) => {
                    return (<Fragment key={idy}>
                      <li className="update-item">
                        - {update}
                      </li>
                    </Fragment>)
                  })}
                </ul>
              </Fragment>
            )
          })}
        </div>
      </>
    )
  }
}

export default ResumeVersion