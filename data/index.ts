export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Collaboration-first approach, ensuring seamless communication and clarity ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Global availability to fit your schedule—anytime, anywhere",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to turn your vision into reality?",
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
    title: "Comprehensive AI solutions for digital and tech businesses",
    des: "MeshSq, a 🚀 comprehensive project tailored for an esteemed IT company specializing in a wide array of services including development, designing, and much more. MeshSq's expertise lies in crafting innovative solutions that cater to the dynamic needs of modern businesses..",
    img: "/mesh-square.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://www.meshsq.com/",
  },

  {
    id: 2,
    title: "Platform transforming long videos into engaging short clips",
    des: "This case study showcases my collaboration with Smili Media, an innovative company that introduced an AI-driven tool for easy cross-platform video creation from YouTube content. The goal was to convert Smili Media's Figma design into a Next.js website using the Tailwind CSS framework, providing a seamless user experience for their clients. ",
    img: "/smilimedia.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.smilimedia.com/",
  },
  {
    id: 3,
    title: "AI tool generating text prompts for creative purpose.",
    des: "NeoSponsor is an innovative platform designed to facilitate sponsorship partnerships between influencers—such as content creators, amateur athletes, and artists—and sponsors, including companies, brands, and individuals. We believe in the power of collaboration and the mutual benefits it brings to both parties.",
    img: "/neosponsor.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://spone-frontend.vercel.app/",
  },
  {
    id: 4,
    title:
      "AI-powered legal assistant automating document analysis and management",
    des: "Legaly AI is a web app to generate legal contracts with the help of AI. This also summarizes any Legal document into simple sentences which is easier for anyone to understand. This is mainly based on Spanish Law.",
    img: "/legaly.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.legaly.ai/",
  },
];

export const testimonials = [
  {
    quote:
      "Our website transformed from outdated to outstanding, all thanks to Naseem’s hard work and expertise!",
    img: "/testi1.jpg",
    name: "Sarah Mitchell",
    title: "Marketing Director",
  },
  {
    quote:
      "Naseem truly went above and beyond—he’s simply the best of the best.",
    img: "/testi2.jpg",
    name: "James Rodriguez",
    title: "CEO",
  },
  {
    quote:
      "Delivered on time and as planned, providing the best service I've ever experienced with a developer.",
    img: "/testi3.jpg",
    name: "Emily Carter",
    title: "Project Manager",
  },
  {
    quote:
      "He brought immense value to the table and executed everything just as promised.",
    img: "/testi4.jpg",
    name: "David Thompson",
    title: "Operations Manager",
  },
  {
    quote:
      "Always approachable and ready to help, Naseem is a true professional in every sense.",
    img: "/testi5.jpg",
    name: "Laura Johnson",
    title: "IT Director",
  },
];

export const companies = [
  {
    id: 1,
    name: "Colab",
    img: "/colab.png",
    nameImg: "Colab",
  },
  {
    id: 2,
    name: "Dime",
    img: "/dime.png",
    nameImg: "Dime",
  },
  {
    id: 3,
    name: "Leafe",
    img: "/leafe.png",
    nameImg: "Leafe",
  },
  {
    id: 4,
    name: "Penta",
    img: "/penta.png",
    nameImg: "Penta",
  },

  {
    id: 5,
    name: "Terra.",
    img: "/terra.png",
    nameImg: "Terra",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Scrum Master",
    desc: "Applying Scrum principles to ensure teams deliver valuable results for diverse projects and clients.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    desc: "Creating scalable web solutions that align with client goals and enhance project functionality.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance UI/UX Designer",
    desc: "Designing user-friendly interfaces through feedback and insights to meet user needs effectively.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Owner of Digital Agency",
    desc: "Overseeing a digital agency focused on delivering thoughtful and impactful solutions for clients.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
