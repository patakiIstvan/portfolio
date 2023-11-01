import portfolioPic from '../_assets/images/project_portfolio.png';
import kartyasPic from '../_assets/images/project_kartyas.png';
import pomodoroPic from '../_assets/images/project_gpomodoro.png';
import smartcityPic from '../_assets/images/project_smartcity.png';
import projectPic from '../_assets/images/project_projects.png';

export const projectData = [
  {
    title: "Personal portfolio",
    desc: "A brief introduction of me and my projects, which I intend to keep up to date",
    github: "https://github.com/patakiIstvan/portfolio_next13",
    pic: portfolioPic,
    tech: ["HTML", "CSS/SCSS", "javascript", "react.js"],
    category: ["new"]
  },
  {
    title: "Typescript projects",
    desc: "An abstract multi step form including type and input validation",
    github: "https://github.com/patakiIstvan/ts_projects_dashboard",
    pic: projectPic,
    tech: ["HTML", "CSS/SCSS", "javascript", "react.js","typescript"],
    category: ["new"]
  },
  {
    title: "Fancy cards",
    desc: "I followed a design which included some fancy cards",
    github: "https://github.com/patakiIstvan/fancy-cards",
    pic: kartyasPic,
    tech: ["HTML", "CSS/PostCSS", "javascript"],
    category: ["old"]
  },
  {
    title: "Pomodoro timer",
    desc: "Its a customizable timer which helps you stay focused",
    github: "https://github.com/patakiIstvan/pomodoro",
    pic: pomodoroPic,
    tech: ["HTML", "CSS/SASS", "javascript", "react.js"],
    category: ["old"]
  },
  {
    title: "Smart city",
    desc: "A smaller landing page, which is browser compatible",
    github: "https://github.com/patakiIstvan/Smart-city-landpage/tree/master",
    pic: smartcityPic,
    tech: ["HTML", "CSS/SASS", "javascript", "react.js"],
    category: ["old"]
  }
]