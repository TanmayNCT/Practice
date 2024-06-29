export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I'm Skilled in creating responsive and interactive 3D/2D user interfaces",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Learning Advance React Concepts and diving into Three.js for dynamic 3D graphics.",
    description: "In the process of",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in collaborating on a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Project Management App",
    des: "An all-in-one app designed to manage company data, including projects, employees, timesheets, analysis dashboards, and leave tracking, with different access levels",
    img: "/pmt.png",
    iconLists: [
      "/re.svg",
      "/redux.svg",
      "/mui.svg",
      "/javascript.svg",
      "/css.svg",
      "/nginx.svg",
    ],
    // link: "React Redux MUI Javascript CSS NGINX SSL",
  },
  {
    id: 2,
    title: "3D Web Application",
    des: "An app used to visualize 3D and 2D models, offering features for model manipulation, annotation, and real-time collaboration",
    img: "/3d-viewer-selection.jpg",
    iconLists: [
      "/re.svg",
      "/redux.svg",
      "/mui.svg",
      "/javascript.svg",
      "/css.svg",
      "/sass.svg",
      "/hoops_communicator_logo.png",
      "/geometry_logo.jpg",
    ],
    // link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "Digital Twin App",
    des: "An app for creating and managing digital twins of physical assets, enabling real-time monitoring, simulation, and analysis to optimize performance and predict maintenance.",
    img: "/cityz.png",
    iconLists: [
      "/re.svg",
      "/redux.svg",
      "/mui.svg",
      "/javascript.svg",
      "/css.svg",
      "/sass.svg",
      "/twinit_logo1.png",
      "/webpack-icon.svg",
    ],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  // {
  //   id: 4,
  //   title: "Next Project could be ours 😉",
  //   des: "",
  //   // img: "/p4.svg",
  //   iconLists: ["/re.svg"],
  //   link: "https://github.com/adrianhajdin/iphone",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "nCircle Tech",
    img: "/ncircle.png",
    nameImg: "/nCirlceName.svg",
  },
  {
    id: 2,
    name: "Invicara",
    img: "/invicara.png",
    nameImg: "/invicaraName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: `Collaborated with team of 3 developers to build Project Management App from scratch using React. Independently hosted the application on a local server with pm2,nginx, and SSL.`,
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Memeber of Technical Staff",
    desc: "ReactJS developer for 3d Web app in React. Implemented Custom Geometric Solutions for 3d/2d manipulation",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Lead Front End",
    desc: "Took upon leadership role to train and lead freshers for front end app. Took Part in project Planning, UI asthetics and many more leadership decisions",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "ReactJS Developer",
    desc: "ReactJS develoepr for a digital twin application using React that simulates and optimizes real-time physical systems using IoT data and advanced modeling techniques",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tanmay-mantur-011285174",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/mantur_tanmay?s=21",
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/what_will_i_say_?igsh=aWxma2Z6YjlsNHVk&utm_source=qr",
  },
];
