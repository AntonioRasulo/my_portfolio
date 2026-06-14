/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import cIcon from "./assets/images/c.svg"
import cppIcon from "./assets/images/cpp.svg"
import linuxIcon from "./assets/images/linux.svg"
import pythonIcon from "./assets/images/python.svg"
import jsIcon from "./assets/images/javascript.svg"
import csIcon from "./assets/images/cs.svg"

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Antonio Rasulo",
  title: "Hi all, I'm Antonio",
  subTitle: emoji(
    "Software Engineer with strong experience in C++ and performance-critical software. Proven track record delivering production features on large-scale software platforms. Skilled in debugging, system architecture, automation, and cross-team technical leadership. Proven flexibility, capability, and passion for working with new technologies and programming languages, quickly adapting to different environments and contributing effectively across diverse software domains."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AntonioRasulo",
  itchio: "https://mischievouscats.itch.io/",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "antonio.rasuloa@libero.it",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER",
  skills: [
    //emoji(
    //  "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    //),
    //emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    //emoji(
    //  "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    //)
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      icon: cppIcon // Use imported SVG
    },
    {
      skillName: "C",
      icon: cIcon // Use imported SVG
    },
    {
      skillName: "C#",
      icon: csIcon // Use imported SVG
    },
    {
      skillName: "Linux",
      icon: linuxIcon // Use imported SVG
    },
    {
      skillName: "Python",
      icon: pythonIcon // Use imported SVG
    },
    {
      skillName: "JavaScript",
      icon: jsIcon // Use imported SVG
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Università di Pisa",
      logo: require("./assets/images/Stemma_unipi.svg.png"),
      subHeader: "Master Degree in Computer Engineering",
      duration: "September 2018 - May 2021",
      descBullets: [
        "Implemented a Convolutional Neural Network on a GPU using OpenCL and C++",
        "Developed a snake videogame clone using OpenGL and C++",
        "Developed a popular italian card game (called Scala40) using C++",
        "Developed in C a client/server application that simulates a social network",
        "Developed a Space Invaders clone in C"
      ]
    },
    {
      schoolName: "Università di Siena",
      logo: require("./assets/images/unisi.jpg"),
      subHeader: "Bachelor Degree in Computer Engineering",
      duration: "October 2014 - October 2017",
      descBullets: ["Learned advanced programming in C and C++ and optimization algorithms",
                    "Introduced concepts of computer architecture",
                    "Math and Physics studies"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C++", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C",
      progressPercentage: "90%"
    },
    {
      Stack: "Adaptability to new programming languages",
      progressPercentage: "80%"
    },
    {
      Stack: "Computer architecture",
      progressPercentage: "70%"
    },
    {
      Stack: "Unit Testing",
      progressPercentage: "70%"
    },
    {
      Stack: "C#",
      progressPercentage: "60%"
    },
    {
      Stack: "Math",
      progressPercentage: "60%"
    },
    {
      Stack: "Linux",
      progressPercentage: "60%"
    },
    {
      Stack: "Python",
      progressPercentage: "40%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Motorola Solutions",
      companylogo: require("./assets/images/motorola.jpg"),
      date: "March 2025 – Present",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developing, maintaining and fixing C++ software code",
        "Developing internal test automation tools written in C# with Python scripting"
      ]
    },
    {
      role: "Software Engineer",
      company: "Forcepoint",
      companylogo: require("./assets/images/forcepoint.png"),
      date: "July 2024 – January 2025",
      desc: "Designed and implemented major components of a browser extension used for user interaction and security workflows using JavaScript"
    },
    {
      role: "Software Engineer",
      company: "Qualcomm",
      companylogo: require("./assets/images/qualcomm.jpg"),
      date: "October 2022 – June 2024",
      descBullets:[
        "Developed C++ software code for internal tools. Software unit testing with googletest.",
        "Created technical documentation, UML diagrams, and internal design specifications",
        "Led technical implementation of multiple projects, trained colleagues and ran technical interviews"
      ]
    },
    {
      role: "Software Engineer",
      company: "Resiltech",
      companylogo: require("./assets/images/resiltech.png"),
      date: "October 2021 – June 2022",
      descBullets:[
        "Designed and developed C and C++ software for safety-critical systems",
        "Development and maintained of Python, Bash, Makefile and Perl scripts for automation and testing"
      ]
    },
    {
      role: "Quality Assurance Engineer",
      company: "PSM Gaming",
      companylogo: require("./assets/images/psm.jpg"),
      date: "October 2017 – June 2018",
      descBullets:[
         "Analysed and validated C++ codebases",
         "Automated testing using Bash scripts",
         "Performed mathematical and statistical analysis of gaming algorithms"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Please feel free to contact me!",
  number: "+353851196129",
  email_address: "antonio.rasuloa@libero.it"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  contactInfo,
  isHireable,
  resumeSection
};
