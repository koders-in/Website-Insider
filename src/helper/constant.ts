import { githubLogo, googleLogo, indianFlag, instaLogo } from "../assets";

export interface TestmonialData {
  description: string;
  logo: string;
  title: string;
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
      { title: "Jobs", route: "", target: false },
      { title: "Contact", route: "", target: false },
    ],
  },
  {
    title: "Quick Links",
    buttons: [
      { title: "Blogs", route: "blog", target: false },
      { title: "Portfolio", route: "", target: false },
      { title: "Pricing", route: "", target: false },
      { title: "Payments", route: "", target: false },
    ],
  },
  {
    title: "Legal",
    buttons: [
      { title: "Privacy Policy", route: "privacy-policy", target: false },
      { title: "Terms of Services", route: "", target: false },
      { title: "Cancellation", route: "", target: false },
      { title: "Refund", route: "", target: false },
    ],
  },
  {
    title: "Support",
    buttons: [
      { title: "GitHub", route: "", target: false },
      { title: "Help", route: "", target: false },
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
  "UI?UX",
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
    class: "text-center border-r-2  border-main-teal",
    title: "Company",
    state: "01",
    html: '<p class="font-battambangMedium px-2 md:px-3 lg:px-6 mt-2 text-main-light_white text-[16px]">Rest assured. Unlike freelancers,<span class="text-main-teal">  we are sticking till completion</span>.</p>',
  },
  {
    class: "text-center border-r-2  border-main-teal",
    title: "One Stop Solution",
    state: "02",
    html: ' <p class="font-battambangMedium px-2 md:px-3 lg:px-6 mt-2 text-main-light_white text-[16px]">Design+Frontend+Backend +Testing+QnA+Docs?<span class="text-main-teal"> We do it all</span>.</p>',
  },
  {
    class: "text-center border-r-2  border-main-teal",
    title: "Quality + Satisfaction",
    state: "03",
    html: '<p class="font-battambangMedium px-2 md:px-3 lg:px-6 mt-2 text-main-light_white text-[16px]"><span class="text-main-teal">Quality </span>delivery with 100%<span class="text-main-teal"> Satisfaction </span>or 100%refund.</p>',
  },
  {
    class: "text-center",
    title: "Your Code, Not Ours.",
    state: "04",
    html: ' <p class="font-battambangMedium px-2 md:px-3 lg:px-6 mt-2 text-main-light_white text-[16px]">We’re giving <span class="text-main-teal">IPR rights</span>, notjust the source code.</p>',
  },
];
