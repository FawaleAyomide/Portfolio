import {useState} from 'react'
import Nav from './Nav'
import { Link } from "react-router-dom";
import Zc from "../images/ZC Logo.jpg";
import { TbClick } from "react-icons/tb";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Construction Fields",
      subHeading: "Construction Fields landing page.",
      url: "https://construction-field.vercel.app/"
    },
    {
      id: 2,
      title: "Loopstudios",
      subHeading: "Loopstudio responsive landing page.",
      url: "https://www.pinterest.com/pin/863565297317918610/",
    },
    {
      id: 3,
      title: "Zchat App",
      subHeading: "A Haven for Text-Based Content",
      url: "https://zchat-c3aae.web.app/",
    },
    {
      id: 4,
      title: "Easy Bank Landing Page",
      subHeading: "Next generation digital banking.",
      url: "https://easy-bank-landing-page-omega.vercel.app/",
    },
    {
      id: 5,
      title: "Sunny Side Agency",
      subHeading: "Transform your brand.",
      url: "https://sunny-side-agency-one.vercel.app/",
    },
    {
      id: 6,
      title: "Fylo Dark Theme Landing Page",
      subHeading: "All your files in one secure location, accessible anywhere.",
      url: "https://fylo-dark-theme-sol.netlify.app/",
    },
    {
      id: 7,
      title: "Fylo Landing Page",
      subHeading: "Fylo landing page with two column layout challenge on Frontend Mentor",
      url: "https://fylo-landing-page-8bjw.vercel.app/",
    },
    {
      id: 8,
      title: "Github Repo Fetcher",
      subHeading: "Github repository fetcher using Vue(.js)",
      url: "https://repository-fetch.vercel.app/",
    },
    {
      id: 9,
      title: "React Calculator",
      subHeading: "Functional calculator built with React(.js)",
      url: "https://react-calculator-beta-beryl.vercel.app/",
    },
    {
      id: 10,
      title: "QR code component",
      subHeading: "QR code component challenge on Frontend Mentor)",
      url: "https://qr-code-component-seven-rouge.vercel.app/HTML",
    },
  ])
  return (
    <div>
      <Nav/>
      <div className="boxes pro">
              {projects.map((project) => (
                <div className="box" key={project.id}>
                  <img src={Zc} alt="" className="hack" />
                  <div className="box-content">
                    <h2>{project.title}</h2>
                    <p>{project.subHeading}</p>
                    <Link to={project.url}>
                      <TbClick className="click" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
      </div>
  )
}

export default Projects