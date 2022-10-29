import { githubLogo, googleLogo, indianFlag, instaLogo } from "../assets";

export interface TestmonialData {
  description: string;
  logo: string;
  title: string;
  animationStyle?: string;
}
export const testmonialLogo: Array<TestmonialData> = [
  {
    logo: indianFlag,
    description:
      "“We choose Koders because of their ability to adapt with feedback, ultimatley leading to the best experience for our members and team.” Indian Army",
    title: "Indian Army",
  },
  {
    logo: googleLogo,
    description:
      "“We choose Koders because of their ability to adapt with feedback, ultimatley leading to the best experience for our members and team.” Google Logo",
    title: "Google",
  },
  {
    logo: instaLogo,
    description:
      "“We choose Koders because of their ability to adapt with feedback, ultimatley leading to the best experience for our members and team.” Insta Logo",
    title: "Instagram",
  },
  {
    logo: githubLogo,
    description:
      "“We choose Koders because of their ability to adapt with feedback, ultimatley leading to the best experience for our members and team.” Github Logo",
    title: "Github",
  },
];

export const footerButtons = [
  {
    title: "Resources",
    buttons: [
      { title: "About", route: "", target: false },
      { title: "Jobs", route: "/Jobs", target: false },
      { title: "Contact", route: "", target: false },
    ],
  },
  {
    title: "Quick Links",
    buttons: [
      { title: "Blogs", route: "/Blogs", target: false },
      {
        title: "Portfolio",
        route: "https://portfolio.koders.in/",
        target: true,
      },
      { title: "Pricing", route: "", target: false },
      { title: "Payments", route: "https://payments.koders.in/", target: true },
    ],
  },
  {
    title: "Legal",
    buttons: [
      { title: "Privacy Policy", route: "/PrivacyPolicy", target: false },
      { title: "Terms of Services", route: "/TermsOfServic", target: false },
      { title: "Cancellation", route: "/Cancellation", target: false },
      { title: "Refund", route: "/Cancellation", target: false },
    ],
  },
  {
    title: "Support",
    buttons: [
      { title: "GitHub", route: "https://github.com/koders-in", target: true },
      { title: "Help", route: "", target: false },
      { title: "Join Discord", route: "https://dsc.gg/koders", target: true },
    ],
  },
];

export const reviews = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 16, 17, 18, 19, 20,
].map((item) => {
  return {
    title: "Google",
    message:
      '"Just want to give a quick thanks to Connor. Has always remained helpful and patient through all our companies needs. Goes above and beyond to ensure we receive service regardless of the excessive amount of work on his plate."',
    logo: googleLogo,
  };
});

export const typeOfProjects = [
  "Web Development",
  "Mobile Development",
  "Website Design",
  "Desktop App",
  "Toolbots",
  "Integration",
  "UI/UX",
  "Backend Development",
  "Web Scraper",
  "Discord Bots",
];

export interface CardObject {
  isMobile?: boolean;
  translateX?: number;
  className?: string;
  title: string;
  description: string;
  price: string;
  services: Array<string>;
  aos?: string;
}
export const pricingCardData: Array<CardObject> = [
  {
    title: "Basic",
    description: "The best plan to start your journey at Koders.",
    price: "$10.99",
    services: [
      "Start Messaging",
      "Flexible Team Meetings",
      "4TB Cloud Storage",
      "Start Messaging",
      "Flexible Team Meetings",
      "2TB Cloud Storage",
    ],
  },
  {
    title: "Basic Plus",
    description: "The best plan to start your journey at Koders.",
    price: "$10.99",
    services: [
      "Start Messaging",
      "Flexible Team Meetings",
      "4TB Cloud Storage",
      "Start Messaging",
      "Flexible Team Meetings",
      "2TB Cloud Storage",
    ],
  },
  {
    title: "Premium",
    description: "The best plan to start your journey at Koders.",
    price: "$10.99",
    services: [
      "Start Messaging",
      "Flexible Team Meetings",
      "4TB Cloud Storage",
      "Start Messaging",
      "Flexible Team Meetings",
      "2TB Cloud Storage",
    ],
  },
  {
    title: "Enterprise",
    description: "The best plan to start your journey at Koders.",
    price: "$10.99",
    services: [
      "Start Messaging",
      "Flexible Team Meetings",
      "4TB Cloud Storage",
      "Start Messaging",
      "Flexible Team Meetings",
      "2TB Cloud Storage",
    ],
  },
];

export const whyWe = [
  {
    class: "text-center  border-main-teal border-r-4",
    title: "Company",
    state: "01",
    html: '<p class="font-miligramText400 px-2 mt-2 text-main-light_white text-[1.03rem] leading-none xl:text-[1.2rem] lg:leading-[1.3rem] md:px-3 lg:px-6">Rest assured. Unlike freelancers,<span class="text-main-lightTeal">  we are sticking till completion</span>.</p>',
  },
  {
    class: "text-center  border-main-teal border-r-4",
    title: "One Stop Solution",
    state: "02",
    html: ' <p class="font-miligramText400 px-2 mt-2 text-main-light_white text-[1.03rem] leading-none xl:text-[1.2rem] lg:leading-[1.3rem] md:px-3 lg:px-6">Design+Frontend+Backend +Testing+QnA+Docs?<span class="text-main-lightTeal"> We do it all.</span></p>',
  },
  {
    class: "text-center  border-main-teal border-r-4",
    title: "Quality + Satisfaction",
    state: "03",
    html: '<p class="font-miligramText400 px-2 mt-2 text-main-light_white text-[1.03rem] leading-none xl:text-[1.2rem] lg:leading-[1.3rem] md:px-3 lg:px-6"><span class="text-main-lightTeal">Quality </span>delivery with 100%<span class="text-main-lightTeal"> Satisfaction </span>or 100% refund.</p>',
  },
  {
    class: "text-center",
    title: "Your Code, Not Ours",
    state: "04",
    html: ' <p class="font-miligramText400 px-2 mt-2 text-main-light_white text-[1.03rem] leading-none xl:text-[1.2rem] lg:leading-[1.3rem] md:px-3 lg:px-6">We’re giving <span class="text-main-lightTeal">IPR rights</span>, not just the source code.</p>',
  },
];

export const faq = [
  {
    question: "How long will it take to get a new website?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
  {
    question: "How long will it take to get a new mobile app?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
  {
    question: "How long will it take to get a new ui/ux?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
  {
    question: "How long will it take to get a new discord bot?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
  {
    question: "How long will it take to get a new desktop app?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
  {
    question: "How long will it take to get a new backend?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laboriosam nihil natus soluta porro ratione quaerat eligendi non, modi aut accusantium? Laborum at, ullam recusandae voluptates repudiandae cum nihil nisi voluptatibus saepe!",
  },
];

export const pricingList = [
  "14,000$",
  "28,000$",
  "45,000$",
  "62,000$",
  "70,000$",
];
export const timeLineList = [
  "Less than one week",
  "Less than one month",
  "Less than one year",
  "More than one year",
];
