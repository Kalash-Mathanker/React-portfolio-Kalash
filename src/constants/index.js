import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Welcome! I'm a dedicated software developer proficient in JavaScript, ReactJS, Java, HTML, CSS, SQL, Object-Oriented Programming, Data Structures, and Algorithms. With a passion for crafting efficient solutions, my aim is to leverage my skills to create innovative and impactful web applications that enhance user experiences and drive business growth. Let's collaborate and build something extraordinary together!`;

export const ABOUT_TEXT = `I'm a passionate software developer with a deep-rooted love for coding. My journey in the realm of programming began with a curiosity for solving problems, which eventually led me to specialize in JavaScript, ReactJS, Java, HTML, CSS, SQL, Object-Oriented Programming, Data Structures, and Algorithms. With each line of code I write, I strive for excellence, constantly pushing the boundaries of what's possible. I thrive in collaborative environments where ideas flow freely and creativity knows no bounds. Outside of coding, you'll find me exploring the latest tech trends, honing my skills, or simply enjoying a good cup of coffee while brainstorming my next big project. Let's connect and embark on this coding journey together!`;


export const PROJECTS = [
  {
    title: "Beat Box",
    image: project1,
    description:
      "BeatBox is my Java project aimed at providing a platform for creating and sharing beats. Users can generate beats, save them, and even share them with others. It's designed to offer a user-friendly experience for music enthusiasts to craft and collaborate on rhythmic patterns.",
    technologies: ["Java","Java Swing", "Java Sound Package", "Java .net Package"],
  },
  {
    title: "Password Generator",
    image: project2,
    description:
      "This project is a web application that generates secure passwords, featuring a user-friendly interface for customizing password length and complexity. It aims to help users create strong, unique passwords easily.",
    technologies: ["React", "TailwindCSS", "Hooks"],
  },
  {
    title: "Menu Card",
    image: project3,
    description:
      "This project is a web application that offers a clean and user-friendly interface for browsing various menu items and switching between categories. It aims to enhance the dining experience by making menu navigation intuitive and visually appealing.",
    technologies: ["React", "CSS", "Hooks"],
  },
  {
    title: "Amazon.com Clone",
    image: project4,
    description:
      "This project is a web application that replicates Amazon's user interface, offering a user-friendly experience for browsing products and viewing item details.",
    technologies: ["HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "India",
  linkedInUrl: "https://www.linkedin.com/in/kalashmathanker",
};
