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
// Tagline for branding
export const tagline = "Smarter Healthcare Starts with Smarter Assessment";

export const heroSection = {
  badge: "AI-ENABLED MEDICAL GUIDANCE",
  heading: "Revolutionize your healthcare journey with",
  highlight: "AI-powered symptom triage",
  description:
    "Empower patients before their clinical visit through intelligent symptom checking, real-time risk evaluation, and actionable insights — all backed by cutting-edge AI.",
  ctaText: "Request a Demo",
  image: {
    src: landingImg,
    alt: "Virtual Triage Interface Illustration",
    width: 400,
    height: 500,
  },
};

export const platformHighlights = [
  {
    icon: "info",
    title: "Conversational Symptom Input",
    description: "Simply describe your symptoms in everyday language — our AI interprets and evaluates them instantly.",
  },
  {
    icon: "eye",
    title: "Real-Time Risk Evaluation",
    description: "Get immediate analysis with confidence scores to guide your next steps in care.",
  },
  {
    icon: "check",
    title: "Tailored Medical Insights",
    description: "Receive guidance personalized to your age, gender, history, and vital signs — all handled securely.",
  },
];
