import {
  Feature,
  Detail,
  FAQ,
  Plan,
  Testimonial,
  Logo,
  //   Link,
  Social,
} from "../types";

// Features
export const features: Feature[] = [
  {
    id: "0",
    icon: "/images/feature-1.png",
    caption: "feature.easy_integration",
    title: "feature.work_smarter_not_harder",
    description: "feature.productivity_description",
    button: {
      icon: "/images/magictouch.svg",
      title: "feature.watch_the_demo",
    },
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    caption: "feature.secure_trustworthy",
    title: "feature.sleep_easy",
    description: "feature.data_security_description",
    button: {
      icon: "/images/docs.svg",
      title: "feature.read_docs",
    },
  },
];

// Global Features
export const globalFeatures: Feature[] = [...features]; // Copy of features

// Details
export const details: Detail[] = [
  {
    id: "0",
    icon: "/images/detail-1.png",
    title: "AI automated video editing",
  },
  {
    id: "1",
    icon: "/images/detail-2.png",
    title: "Collaborate with your team",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "Ultra fast cloud-engine",
  },
  {
    id: "3",
    icon: "/images/detail-4.png",
    title: "24 / 7 Customer support",
  },
];

// Global Details
export const globalDetails: Detail[] = [...details]; // Copy of details

// FAQ
export const faq: FAQ[] = [
  {
    id: "0",
    question: "How easy is it to setup Xora?",
    answer:
      "Absolutely! Not only can you upgrade your plan at any time, but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "1",
    question: "Can I integrate Xora with other platforms?",
    answer: "Yes, Xora can be integrated with various platforms seamlessly.",
  },
  {
    id: "2",
    question: "How often do you add new content?",
    answer:
      "We regularly update our content to ensure you have the latest features and information.",
  },
  {
    id: "3",
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee if you are not satisfied with our service.",
  },
  {
    id: "4",
    question: "Do you have corporate plans?",
    answer: "Yes, we offer tailored plans for corporate clients.",
  },
  {
    id: "5",
    question: "What happens when I’m out of storage?",
    answer:
      "You will receive a notification, and you can upgrade your plan or delete unused files.",
  },
  {
    id: "6",
    question: "Can I upgrade my plan?",
    answer:
      "Yes, you can upgrade your plan at any time through your account settings.",
  },
  {
    id: "7",
    question: "How do I invite my team?",
    answer:
      "You can invite your team members through the user management section in your account.",
  },
  {
    id: "8",
    question: "Do you offer training for individuals and teams?",
    answer: "Yes, we provide training sessions for both individuals and teams.",
  },
  {
    id: "9",
    question: "I’m locked out of my account, what do I do?",
    answer:
      'You can reset your password using the "Forgot Password" link on the login page.',
  },
];

// Global FAQ
export const globalFAQ: FAQ[] = [...faq]; // Copy of FAQ

// Plans
export const plans: Plan[] = [
  {
    id: "0",
    title: "Core",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Best for solo creators",
    features: [
      "100MB Cloud storage",
      "100+ prompt templates",
      "5 projects",
      "24/7 support",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "Overdrive",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Most popular plan",
    features: [
      "All Starter features",
      "1TB additional storage",
      "Unlimited projects",
      "Analytics",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "Team",
    priceMonthly: 39,
    priceYearly: 29,
    caption: "Exclusively for teams",
    features: [
      "All Overdrive features",
      "10TB additional storage",
      "50% off per member",
      "Real-time collaboration",
    ],
    icon: "/images/hexagon.svg",
    logo: "/images/plan-3.png",
  },
];

// Global Plans
export const globalPlans: Plan[] = [...plans]; // Copy of plans

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "0",
    name: "Jessica Saunders",
    role: "Globalnomads",
    avatarUrl: "/images/testimonials/jessica-saunders.png",
    comment:
      "Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  },
  {
    id: "1",
    name: "Mark Erixon",
    role: "Vid capital intl",
    avatarUrl: "/images/testimonials/mark-erixon.png",
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: "2",
    name: "Melanie Hurst",
    role: "Cyberleap",
    avatarUrl: "/images/testimonials/melanie-hurst.png",
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: "2",
    name: "Adam Joles",
    role: "Cyberleap",
    avatarUrl: "/images/testimonials/melanie-hurst.png",
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
];

// Global Testimonials
export const globalTestimonials: Testimonial[] = [...testimonials]; // Copy of testimonials

// Logos
export const logos: Logo[] = [
  {
    id: "0",
    title: "Afterpay",
    url: "/images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: "/images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: "/images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: "/images/logos/drips.svg",
    width: 77,
    height: 48,
  },
];

// Global Logos
export const globalLogos: Logo[] = [...logos]; // Copy of logos

// // Links
// export const links: Link[] = [
//   {
//     id: '0',
//     title: 'Ios',
//     icon: <Ios />,
//     url: '#',
//   },
//   {
//     id: '1',
//     title: 'Android',
//     icon: <Android />,
//     url: '#',
//   },
//   {
//     id: '2',
//     title: 'Windows',
//     icon: <Windows />,
//     url: '#',
//   },
//   {
//     id: '3',
//     title: 'Web',
//     icon: <Web />,
//     url: '#',
//   },
// ];

// // Global Links
// export const globalLinks: Link[] = [...links]; // Copy of links

// Socials
export const socials: Social[] = [
  {
    id: "0",
    title: "x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
];

// Global Socials
export const globalSocials: Social[] = [...socials]; // Copy of socials
