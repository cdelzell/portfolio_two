import ticket from '/assets/experiences/ticket_to_ride.png';
import bright from '/assets/experiences/bright.png';
import portfolio1 from '/assets/experiences/portfolio_original.png';
import raikes from '/assets/experiences/raikes.png';
import scoular from '/assets/experiences/scoularBuild.png';
import nsaa from '/assets/experiences/nsaaBG.png';
import salt from '/assets/experiences/salt.png';
import nhri from '/assets/experiences/nhri.png';

export const EXPERIENCES = {
  T: {
    name: 'Ticket to Ride 🚂',
    blurb: 'Essentially a crash course in how to create a full stack web application while getting to work with a great team!',
    details: 'a full stack web application in React and Typescript with multi-player support.',
    time: 'January 2025 - May 2025',
    image: ticket,
    category: 'projects',
  },
  B: {
    name: 'A Brighter Future ⭐',
    blurb: 'I worked on a team of four at a 24-hour hackathon to make this project. Our vision was a community-based galaxy simulation site, and we successfully deployed the product!',
    details: 'a full stack web application in React and Javascript with multi-player support.',
    time: 'March 2025',
    image: bright,
    category: 'projects',
  },
  O: {
    name: 'My first portfolio 🔨',
    blurb: 'This was my first venture into front-end, and taught me the basics. It was the first time I realized how complex design really is, but also how much fun creating web applications can be!',
    details: 'a portfolio website in HTML, CSS, and Javascript.',
    time: 'June 2024 - July 2024',
    image: portfolio1,
    category: 'projects',
  },
  P: {
    name: 'This portfolio 🔨',
    blurb: 'This was my return to front-end after getting a lot more experience, and was a fun design process as I thought through how to make a website that I really liked rather than just was able to scrape together :)',
    details: 'a portfolio website in React, HTML, and CSS.',
    time: 'March 2025 - Present',
    image: raikes,
    category: 'projects',
  },
  D: {
    name: 'Data Analytics Intern 🌽',
    blurb: 'My main project was creating a system to monitor all the data pipelines my team had running, alerting and protecting against data pipeline issues! This tool was used in all stand-up meetings.',
    details: 'worked on a team of 8 with data pipelines, Power-BI, & data extraction/analysis.',
    time: 'May 2024 - August 2024',
    image: scoular,
    category: 'work',
  },
  N: {
    name: 'Design Studio Software Intern 🏀',
    blurb: 'One highlight of this experience was getting to learn more about the database world as we worked on moving from flat to relational data!',
    details: 'worked on an Agile team of 6 to help deliver a website for officials to the NSAA.',
    time: 'January 2024 - May 2024',
    image: nsaa,
    category: 'work',
  },
  I: {
    name: 'Innovation Processes Teaching Assistant 🏔',
    blurb: 'I helped with this class in the fall of 2023, and am returning for the fall of 2024! This class is a great way to teach entrepreneurship, and has been a highlight of my college career.',
    details: 'worked with 40 students on start-up style projects from ideation to pre-production.',
    time: 'Fall 2024, Fall 2025',
    image: raikes,
    category: 'work',
  },
  S: {
    name: 'Student Advisory Board President 🌽',
    blurb: 'This position has shown me both sides of organizations, as I have had to work closely with staff and students to try and get both sides on the same page. This can be complex, but rewarding!',
    details: 'lead a board of student representatives from the Raikes school tasked to advise staff on program-wide improvements.',
    time: 'August 2023 - Present',
    image: raikes,
    category: 'leadership',
  },
  M: {
    name: 'SALT Ministry: Student Leader',
    blurb: 'Co-leading a small group has been one of the most rewarding experiences of my college career, getting to walk alongside others and build genuine community.',
    details: 'co-lead a group of 10-15 girls weekly, assist with Welcome team at weekly 500+ gatherings.',
    time: 'January 2024 - May 2024',
    image: salt,
    category: 'leadership',
  },
  K: {
    name: 'Kauffman Residents Assn Vice President',
    blurb: 'Initially, I joined this because I was frustrated with the state of our kitchens. We were able to fully restock our kitchens as of December 2024, with new items, even getting a Kitchen-Aid!',
    details: 'work on the executive team to keep the building properly maintained and organize events for residents.',
    time: 'August 2024 - Present',
    image: raikes,
    category: 'leadership',
  },
  H: {
    name: 'NHRI Leadership Mentor',
    blurb: 'I helped with this class in the fall of 2023, and am returning for the fall of 2024! This class is a great way to teach entrepreneurship, and has been a highlight of my college career.',
    details: 'selected as a mentor in the NHRI class of 2023. meet weekly with a high school mentee and attend weekly project meetings.',
    time: 'March 2024 - Present',
    image: nhri,
    category: 'leadership',
  },
};

export const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

export const CATEGORY_KEYS = {
  projects: ['T', 'B', 'O', 'P'],
  work: ['D', 'N', 'I'],
  leadership: ['S', 'M', 'K', 'H'],
};

export const HOT_KEYS = new Set(Object.keys(EXPERIENCES));
