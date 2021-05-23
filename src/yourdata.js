// Skills Icons
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import flickrIcon from "./images/flickr.svg"
import linkedinIcon from "./images/linkedin.svg"
import movieIcon from "./images/movie.png"

// Social Icon
import githubIcon from "./images/github.svg"

// Images
import profile from "./images/profile.jpg"
import fissure from "./images/fis.jpg"
import safespace from "./images/safespace.png"
import petsaver from "./images/pet.png"
import solo from "./images/poster.jpg"
import razer from "./images/razer1.jpg"
import mobile from "./images/mobilestrike.jpg"
import jb from "./images/jb.jpg"
import mp from "./images/mp.jpg"
import home from "./images/homeland.jpg"


export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Mei Yen",
  headerTagline: [
    //Line 1 For Header
    "Mei Yen",
    //Line 2 For Header
    "Front-end Engineer",
  ],
  //   Header Paragraph
  headerParagraph:
    "A creative front-end developer with a strong focus on designing and building user interfaces.",

  //Contact Email
  contactEmail: "meiyen-x@hotmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "SafeSpace", //Project Title - Add Your Project Title Here
      para:
        "AR/VR Design Student Project, 2nd Place at STePS 2020", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      safespace,
      //Project URL - Add Your Project Url Here
      url: "/safespace",
      tag: "programming",
    },
    {
      title: "PetSaver", //Project Title - Add Your Project Title Here
      para:
        "Personal Savings App for Interaction Design Student Project", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      petsaver,
      //Project URL - Add Your Project Url Here
      url: "/petsaver",
      tag: "Design",
    },
    {
      title: "SOLO", //Project Title - Add Your Project Title Here
      para:
        "VR FPS Game for Orbital Summer Project 2018 – Apollo 11", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: solo,
      //Project URL - Add Your Project Url Here
      url: "/solo",
      tag: "programming",
    },
    {
      title: "Razer Project Linda", //Project Title - Add Your Project Title Here
      para:
        "Razer Project Linda Advertisement", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      razer,
      //Project URL - Add Your Project Url Here
      url: "/razer",
      tag: "VFX",
    },
    {
      title: "Mobile Strike Firefight", //Project Title - Add Your Project Title Here
      para:
        "Cinematic for Mobile Strike \"Firefight\" mobile game", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      mobile,
      //Project URL - Add Your Project Url Here
      url: "/mobilestrike",
      tag: "VFX",
    },
    {
      title: "Jungle Beats", //Project Title - Add Your Project Title Here
      para:
        "CGI TV Animated series", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      jb,
      //Project URL - Add Your Project Url Here
      url: "/junglebeats",
      tag: "VFX",
    },
    {
      title: "The Journey: Our Homeland", //Project Title - Add Your Project Title Here
      para:
        "Finale of the trilogy \"The Journey\" TV Drama ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      home,
      //Project URL - Add Your Project Url Here
      url: "/homeland",
      tag: "VFX",
    },
    {
      title: "Matte Painting", //Project Title - Add Your Project Title Here
      para:
        "Digital Photo Manipulation", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      mp,
      //Project URL - Add Your Project Url Here
      url: "/mattept",
      tag: "VFX",
    },
    {
      title: "Fissure", //Project Title - Add Your Project Title Here
      para:
        "Nominated for Best Visual Effects (National Youth Film Awards 2015)", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      fissure,
      //Project URL - Add Your Project Url Here
      url: "/fissure",
      tag: "VFX",
    },
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm highly passionate and motivated in continuously improving my skills and to grow as a front-end developer with a background in art and film.",
  aboutParaTwo:
    "I like to create smart user interface and useful interaction, developing enjoyable web experiences and web applications. A hard worker with a desire to give my all!",
  aboutParaThree:
    "Before designing and building website, I was creating VFX, Compositing, and Matte Painting for TV shows, commericals and animations.",
  aboutParaFour:
    "I'm fan of (dark) fantasy and psychological thriller TV series, movies and animes. (I do watch LOTR, GoT & Doctor Who!). When not online, I do Pole Dancing and Aerial Silk.",
  aboutImage: profile,
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: designIcon,
      title: "Designer",
      para:
        "I create smart, simple user interface and user-centered design.",
      main: "Things I do:",
      language: "Wireframing, Mock ups, Prototyping, User Study/Interviews, User Testing",
      framework: "Design Tools:",
      frameworkDetails: "Figma, Photoshop, Adobe XD, Balsamiq Mockups, Pen & Paper",
    },
    {
      img: codeIcon,
      title: "Front-end Developer",
      para:
        "I like to code and ensure that the product meets technical requirements while providing a user friendly experience.",
      main: "Frontend framework/libraries:",
      framework: "Languages:",
      frameworkDetails: "JavaScript, Java, C, Python, C++, C#",
      language: 
        "React, Nodejs, Unity, Material UI, tailwindcss, HTML, CSS",
        tools: "Dev Tools:",
        descr: "Bitbucket, Bootstrap, Github, Terminal, Git",
      },
    {
      img: movieIcon,
      title: "VFX Artist",
      para: "I enjoy creating effects and bringing everything together to complete a beautiful shot.",
      main: "Things I do:",
      language: "Digital Matte Painting, Compositing, VFX, Fluid and Particle Simulation, AR/VR, Video Editor",
      framework: "VFX:",
      frameworkDetails: "Houdini, Autodesk Maya, VRay, Unreal Engine 4",
      tools: "Video Editing & Compositing:",
      descr: "Nuke, After Effects, Premiere Pro, Photoshop",
    }
  ],

  // End Skills Section --------------------------

  //   Experience Section --------------------------

  promotionHeading: "Experience",
  promotionPara:"Work Experience",
  education: "Academic Qualifications",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's make something great!",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/meiyent/",
    },
    {
      img: githubIcon, url: "https://github.com/bendymochi"
    },
    {
      img: flickrIcon,
      url: "https://www.flickr.com/gp/152541985@N04/Y52418",
    },
  ],

  // End Contact Section ---------------
}

// Projects ---



// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
