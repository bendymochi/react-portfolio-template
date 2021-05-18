// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import flickrIcon from "./images/flickr.svg"
import linkedinIcon from "./images/linkedin.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

// Images
import profile from "./images/profile.jpg"
import crowdtask from "./images/crowdtask.png"
import safespace from "./images/safespace.png"
import petsaver from "./images/pet.png"
import solo from "./images/solo1.png"
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
      title: "Crowdtask", //Project Title - Add Your Project Title Here
      para:
        "Front-end UI/UX Web Developing", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      crowdtask,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "SafeSpace", //Project Title - Add Your Project Title Here
      para:
        "UI Design, Blueprint Scripter", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      safespace,
      //Project URL - Add Your Project Url Here
      url: "https://isteps.comp.nus.edu.sg/event/cs4240/module/AY2019-20+Semester_2+Task_1/project/7",
    },
    {
      title: "PetSaver", //Project Title - Add Your Project Title Here
      para:
        "UI/UX Design", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      petsaver,
      //Project URL - Add Your Project Url Here
      url: "https://www.youtube.com/watch?v=U7QycrOnMk4",
    },
    {
      title: "Solo", //Project Title - Add Your Project Title Here
      para:
        "UI Design, Blueprint Scripter", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: solo,
      //Project URL - Add Your Project Url Here
      url: "https://vimeo.com/326231416",
    },
    {
      title: "Razer Project Linda", //Project Title - Add Your Project Title Here
      para:
        "Compositor & Rotoscoping", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      razer,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Mobile Strike Firefight", //Project Title - Add Your Project Title Here
      para:
        "Compositing, Render Wrangler", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      mobile,
      //Project URL - Add Your Project Url Here
      url: "https://www.youtube.com/watch?v=327ogEyV3Lo",
    },
    {
      title: "Jungle Beats", //Project Title - Add Your Project Title Here
      para:
        "Fluid Simulation, Compositing, Lighting, Set Dresser", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      jb,
      //Project URL - Add Your Project Url Here
      url: "https://www.youtube.com/watch?v=4PS0LT_Uutk",
    },
    {
      title: "The Journey: Our Homeland", //Project Title - Add Your Project Title Here
      para:
        "VFX, Rotoscoping & Compositing", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      home,
      //Project URL - Add Your Project Url Here
      url: "https://vimeo.com/207045390",
    },
    {
      title: "Matte Painting", //Project Title - Add Your Project Title Here
      para:
        "Digital Photo Manipulation", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      mp,
      //Project URL - Add Your Project Url Here
      url: "https://vimeo.com/131540840",
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
    "I’m a web developer with a background in art. I design and code beautifully simple things, and I love what I do.",
  aboutParaTwo:
    "Before designing and building website, I was creating VFX, Compositing, and Matte Painting for TV shows, commericals and animations.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage: profile,
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: designIcon,
      title: "Artist/Designer",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      title: "Engineer",
      header: "Development",
      details: "Javascript",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Experience Section --------------------------

  promotionHeading: "Experience",
  promotionPara:
    "Work experience, internships.",
  title: "National University of Singapore",
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
      url: "https://www.flickr.com/photos/152541985@N04/sets/72157677573782614/",
    },
  ],

  // End Contact Section ---------------
}

// Projects ---



// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
