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
    caption: "feature.seamless_integration",
    title: "feature.empower_your_legal_decisions",
    description: "feature.legal_jargon_simplified",
    button: {
      icon: "/images/magictouch.svg",
      title: "feature.watch_the_demo",
    },
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    caption: "feature.secure_reliable",
    title: "feature.weve_got_you_covered",
    description: "feature.data_security_priority",
    button: {
      icon: "/images/docs.svg",
      title: "feature.read_the_docs",
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
    title: "detail.ai_powered_contract_analysis",
  },
  {
    id: "1",
    icon: "/images/detail-2.png",
    title: "detail.collaborate_with_your_legal_team",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "detail.fast_and_accurate_legal_insights",
  },
  {
    id: "3",
    icon: "/images/detail-4.png",
    title: "detail.legal_support",
  },
];

// Global Details
export const globalDetails: Detail[] = [...details]; // Copy of details

// FAQ
export const faq: FAQ[] = [
  {
    id: "0",
    question: "faq.setup_avota",
    answer: "faq.setup_avota_answer",
  },
  {
    id: "1",
    question: "faq.integrate_with_platforms",
    answer: "faq.integrate_with_platforms_answer",
  },
  {
    id: "2",
    question: "faq.update_legal_content",
    answer: "faq.update_legal_content_answer",
  },
  {
    id: "3",
    question: "faq.refund_policy",
    answer: "faq.refund_policy_answer",
  },
  {
    id: "4",
    question: "faq.corporate_plans",
    answer: "faq.corporate_plans_answer",
  },
  {
    id: "5",
    question: "faq.out_of_storage",
    answer: "faq.out_of_storage_answer",
  },
  {
    id: "6",
    question: "faq.upgrade_plan",
    answer: "faq.upgrade_plan_answer",
  },
  {
    id: "7",
    question: "faq.invite_team",
    answer: "faq.invite_team_answer",
  },
  {
    id: "8",
    question: "faq.offer_training",
    answer: "faq.offer_training_answer",
  },
  {
    id: "9",
    question: "faq.locked_out",
    answer: "faq.locked_out_answer",
  },
];

// Global FAQ
export const globalFAQ: FAQ[] = [...faq]; // Copy of FAQ

// Plans
export const plans: Plan[] = [
  {
    id: "0",
    title: "plan.basic",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "plan.ideal_for_solo_creators",
    features: [
      "plan.feature.cloud_storage",
      "plan.feature.basic_legal_templates",
      "plan.feature.contract_analyses",
      "plan.feature.support",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "plan.professional",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "plan.most_popular",
    features: [
      "plan.feature.all_basic_features",
      "plan.feature.additional_storage",
      "plan.feature.unlimited_analyses",
      "plan.feature.analytics",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "plan.enterprise",
    priceMonthly: 39,
    priceYearly: 29,
    caption: "plan.exclusively_for_teams",
    features: [
      "plan.feature.all_professional_features",
      "plan.feature.ten_tb_storage",
      "plan.feature.discount_per_member",
      "plan.feature.real_time_collaboration",
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
    name: "testimonial.jessica_saunders",
    role: "testimonial.content_creator",
    avatarUrl: "/images/testimonials/jessica-saunders.png",
    comment: "testimonial.jessica_comment",
  },
  {
    id: "1",
    name: "testimonial.mark_erixon",
    role: "testimonial.influencer",
    avatarUrl: "/images/testimonials/mark-erixon.png",
    comment: "testimonial.mark_comment",
  },
  {
    id: "2",
    name: "testimonial.melanie_hurst",
    role: "testimonial.entrepreneur",
    avatarUrl: "/images/testimonials/melanie-hurst.png",
    comment: "testimonial.melanie_comment",
  },
  { 
    id: "3",
    name: "testimonial.jim_bradley",
    role: "testimonial.business_owner",
    avatarUrl: "/images/testimonials/jim-bradley.png",
    comment: "testimonial.jim_comment",
  },
];

// Global Testimonials
export const globalTestimonials: Testimonial[] = [...testimonials]; // Copy of testimonials

// Logos
export const logos: Logo[] = [
  {
    id: "0",
    title: "logo.afterpay",
    url: "/images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "logo.amplitude",
    url: "/images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "logo.sonos",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "logo.maze",
    url: "/images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "logo.drips",
    url: "/images/logos/drips.svg",
    width: 77,
    height: 48,
  },
];

// Global Logos
export const globalLogos: Logo[] = [...logos]; // Copy of logos

// Socials
export const socials: Social[] = [
  {
    id: "0",
    title: "social.x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "social.threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "social.instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "social.discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
];

// Global Socials
export const globalSocials: Social[] = [...socials]; // Copy of socials
