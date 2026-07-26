const Projects = [
    {
        slug : "mapme",
        name: 'MapMe',
        description: "A location tracking application for mobile devices built by The Boys as Minor Project. MapMe tracks your location and give you details on the route, average speed,time and distance covered. To track just tap on 'Start Tracking' and the app will now start collecting your coordinates and starts to draw PolyLines which are used to depict a route from one place to another. You can also view your tracked history and all these details are not collected by us, it is safely stored on your personal device.",
        techStack: ['React.js', 'React Native', 'SASS', 'Context API', 'Google Maps API', 'Async Storage' ],
        githubLink: 'https://www.github.com/swaaz/mapme',
        websiteLink: 'https://mapme.swaaz.dev',
        image: '/assets/images/portfolio/mapme/cover.png',
        width : 1716,
        height : 852
    },
    {
        slug : "halo",
        name: 'Halo',
        description: 'Halo is an Open-source web based elementary game we community folks built in a Hackathon.',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Sockets.io'],
        githubLink: 'https://github.com/swaaz/Halo',
        websiteLink: 'https://halo.swaaz.dev/',
        image: '/assets/images/portfolio/halo/cover.png',
        width: 1598,
        height: 899

    },
    {
        slug : "healthque",
        name: 'Healthque',
        description: 'An Electronic Health Record is collection of various medical records during one’s lifespan. These life time records need to be maintained with some standards else it would be very difficult to bring together the records from different hospitals or health care centres together. The main purpose of this project is to provide people with the ease to access their health record anywhere anytime at any hospital or health centre so that the doctor can have the complete history and give proper medication or treatment required faster. Hence, the need for interoperability. This will interconnect all health care centres across the country and with the appropriate authorisation the health records could be accessed.',
        techStack : ['React Native', 'Redux', 'Firebase Authentication', 'Firebase Firestore', 'Firebase Storage'],
        githubLink: '',
        image : '/assets/images/portfolio/healthque/cover.png',
        width: 1716,
        height: 852
    },
    {
        slug : "prycey",
        name : 'Prycey',
        description : 'Prycey is an online marketplace which aims for simplicity and versatility. It can be described as a web-based platform where the users can buy and sell myriads of products,easily and at their convenience. These include books, gadgets, furniture, household goods,and more. The product is going to be a free online classified service using which people can buy and sell a lot of things in a smooth manner. It is been made available as a website. A lot can be done using this versatile classified service like putting up ads for selling your belongings like gadgets, apparel, books etc. As a buyer, you can look for stuff within the price range or available in your preferred occasions. As a seller, put in the details of the stuff you want to sell in your ads. As a buyer, you can look for stuff within the price range. Add images of the stuff you want to sell through the website You can choose to be contacted by others by email, phone number and both. ',
        techStack : ['React.js', 'Flask', 'SQLite'],
        githubLink : 'https://github.com/swaaz/Healthque',
        image : '/assets/images/portfolio/prycey/cover.png',
        width: 1598,
        height: 923
    },
    {
        slug : "gitgo",
        name: 'GitGo',
        description: "What's it like to create your first pull request on GitHub? GitGo has a fun exercise to instruct you how to do so.",
        techStack: ['React.js'],
        githubLink: 'https://github.com/swaaz/gitgo',
        websiteLink: 'https://gitgo.swaaz.dev',
        image: '/assets/images/portfolio/gitgo/cover.png',
        width: 1593,
        height: 786
    },
    {
        slug : "hacksosc",
        name: 'HackSOSC',
        description: 'Chat Bot built using Deep learning and Natural language processing using Python ',
        techStack: ['Flask', 'Javascript', 'Deep Learning', 'Tensorflow', 'Neural Network'],
        githubLink: 'https://github.com/swaaz/HackSOSC',
        image : '/assets/images/portfolio/hacksosc/cover.png',
        width: 1709,
        height: 953
    },
    // {
    //     slug : "instabot",
    //     name : 'InstaBot',
    //     description: "an Instagram bot that can automate and perform some tasks; makes your task easier. The Bot can show the list of un-followers from you Instagram or it can show your fans and also it can cancel all the pending follow requests which you have already sent before or it can also unfollow those who don't follow you back. ",
    //     techStack : ['Python', 'Selenium', 'Selenium WebDriver'],
    //     githubLink : '',
    //     image : require('../public/assets/images/instabot/cover.png'),
    // },
    // {
    //     slug : "cognitoc",
    //     name : 'Cognito-C',
    //     description : "Using a terminal, learn the C programming language. This is a terminal-based instructional tool for learning the fundamentals of the C programming language. It is a simple, interactive, and user-friendly tool that learners can use to learn the fundamentals of the C programming language. The C programming language was used to create and develop this utility. There will be assessments after each chapter, and only if you pass them will you be able to go on to the next round. ",
    //     techStack : ['C'],
    //     githubLink : '',
    //     image : require('../public/assets/images/cognito-c/cover.png'),
    // },
];


// Sourced from Swasthik's LinkedIn profile export (2026-07-25).
// Each entry renders as a node on the vertical timeline (components/Experience.js).
// `companyLink` is optional; leave it as '' to render the company as plain text.
export const Experience = [
    {
        role: 'Software Engineer II',
        company: 'Google',
        companyLink: '',
        duration: 'Apr 2025 — Present',
        location: 'Dublin, Ireland',
        highlights: [
            "Led the design and implementation of a Go-based microservice automating the full lifecycle of a high-availability platform for disaster recovery, from design doc to production.",
            "Built a Go-based monitoring and alerting system for critical HA infrastructure, enabling proactive detection for services requiring maximum uptime, and provide Tier 1 on-call support.",
            "Mentored 6+ interns into full-time roles, interviewed candidates for SWE/SRE positions globally, and spoke on reliability engineering at Irish universities.",
        ],
        techStack: ['Go', 'Microservices', 'Distributed Systems', 'Monitoring & Alerting'],
    },
    {
        role: 'Cloud Solution Engineer II',
        company: 'Google',
        companyLink: '',
        duration: 'Oct 2023 — Apr 2025',
        location: 'Bengaluru, India',
        highlights: [
            "Built a Terraform-based automation solution for Cloud Composer environment replication, accelerating customer onboarding through dynamic Terraform code generation.",
            "Diagnosed and resolved complex production issues and outages across BigQuery and Cloud Composer for enterprise customers.",
            "Contributed to GCPDiag, Google's open-source GCP diagnostics CLI, and mentored two interns through a full Cloud Composer replication project.",
        ],
        techStack: ['Google Cloud', 'Terraform', 'BigQuery', 'Apache Airflow'],
    },
    {
        role: 'Cloud Solution Engineer',
        company: 'Google',
        companyLink: '',
        duration: 'Aug 2022 — Oct 2023',
        location: 'Bengaluru, India',
        highlights: [
            "Resolved high-priority, cross-functional customer issues on Google Cloud with a focus on BigQuery and Cloud Composer.",
            "Improved an internal diagnostics tool (\"Troublemaker\") by adding 8 new scenario-detection rules.",
            "Built a centralized GCP learning hub for Googlers and ran internal Cloud training sessions for peers.",
        ],
        techStack: ['Google Cloud', 'BigQuery', 'Troubleshooting'],
    },
    {
        role: 'Software Development Engineer Intern',
        company: 'Crime Investigation Department, India',
        companyLink: '',
        duration: 'Mar 2021 — Aug 2022',
        location: 'Bengaluru, India',
        highlights: [
            "Built an AI-based chatbot for a government cybercrime unit that shares safety guidance and uses geolocation to route victims to their nearest cybercrime police station via the Google Maps API.",
            "Owned the product end-to-end: Figma UI/UX design, a React.js + SASS front-end, a FastAPI backend integrating the ML model, and MongoDB for geospatial queries.",
            "Continued as a freelancer after the internship to design, build, and deploy the department's official website, integrating the chatbot into production.",
        ],
        techStack: ['React.js', 'FastAPI', 'MongoDB', 'Python'],
    },
];

// Compiled from real work experience + personal projects (LinkedIn export, 2026-07-25).
// Edit freely — rendered by components/Skills.js using the TechStackList arrows.
export const Skills = [
    {
        category: 'Languages',
        items: ['JavaScript', 'Python', 'Go', 'C++', 'SQL'],
    },
    {
        category: 'Frontend & Mobile',
        items: ['React.js', 'React Native', 'Flutter', 'Redux', 'SASS'],
    },
    {
        category: 'Backend & Systems',
        items: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'Microservices', 'Distributed Systems'],
    },
    {
        category: 'Cloud & DevOps',
        items: ['Google Cloud', 'Terraform', 'Apache Airflow', 'Digital Ocean'],
    },
    {
        category: 'Databases & ML',
        items: ['MongoDB', 'SQLite', 'Firebase', 'TensorFlow'],
    },
    {
        category: 'Tools & Practices',
        items: ['Troubleshooting', 'Monitoring & Alerting', 'Figma'],
    },
];


export default Projects;