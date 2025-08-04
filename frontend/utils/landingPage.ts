// utils/landingPageData.ts
import landingImg from '../assets/landing.jpg'
import logoImg from '../assets/logoImg.jpeg'
export const  logoImage = {
   image: {
    src: logoImg,
    alt: "logo",
    width: 60,
    height: 60,
  },
}
export const heroSection = {
  badge: "MEDICAL GUIDANCE PLATFORM / TRIAGE",
  heading: "Enhance symptom assessment with ",
  highlight: "AI-powered virtual triage",
  description:
    "Support patients before their visit with symptom analysis and tailored medical guidance using AI-powered virtual triage.",
  ctaText: "Get in touch",
  image: {
    src: landingImg,
    alt: "AI Virtual Triage Interface",
    width: 400,
    height: 500,
  },
};

export const platformHighlights = [
  {
    icon: "info", // you can replace with a component later if needed
    title: "Natural Language Symptom Input",
    description: "Describe what you're feeling in plain language - our AI does the rest.",
  },
  {
    icon: "eye", // placeholder
    title: "AI-Based Risk Assessment",
    description: "Receive an instant analysis of your condition with confidence scores.",
  },
  {
    icon: "check", // placeholder
    title: "Personalized Insights",
    description: "Care tailored to your age, gender, history, and vitals - securely handled.",
  },
];
