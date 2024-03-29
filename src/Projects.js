
import images from "./images";

export const projects = [
  {
    title: "Open AI Images",
    description: "Image application allowing user to query Open AI's for original AI created images",
    techUsed: [images.javascript, images.node, images.express, images.react],
    img: images.openAi,
    id: 'sl1912',
    buttonText: 'Live Site',
    link: 'https://open-ai-images.herokuapp.com/'
  },
  {
    title: "Note Keeper",
    description: "Stores notes based on user input, persists data with express and Mongo DB Atlas on the backend.",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt deserunt hic exercitationem molestiae explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium sunt deserunt hic exercitationem molestiae explicabo?",
    techUsed: [images.javascript, images.node, images.express, images.react, images.mongo],
    img: images.noteKeeper,
    id: 'g7', 
    buttonText: 'Live Site',
    link: 'https://note-keep-test.herokuapp.com/'
  },
  {
    title: "Fire Tracker",
    description: "Integrates NASA Fire Information for Resource Management System(FIRMS) with Google Maps API to plot active fire locations across the globe. Clicking the icons gives a brief description served by FIRMS. ",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt deserunt hic exercitationem molestiae explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium sunt deserunt hic exercitationem molestiae explicabo?",
    techUsed: [images.react, images.css, images.googleMaps, images.node ],
    img: images.fireTracker,
    id: 'wt2320',
    buttonText: 'Live Site',
    link: 'https://fire-tracker.herokuapp.com/'
  },
  {
    title: "Read Me Generator",
    description: "Command Line Interface allowing user a streamlined experience in creating a project readME",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt deserunt hic exercitationem molestiae explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium sunt deserunt hic exercitationem molestiae explicabo?",
    techUsed: [images.javascript, images.node],
    img: images.readMe,
    id: 'vs2219', 
    buttonText: 'Git Repo',
    link: 'https://github.com/adam-algatt/ReadME-Plus'
  }
];



