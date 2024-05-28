import { IconDashboard } from "@tabler/icons-react";
import {
  BotMessageSquare,
  Fingerprint,
  ShieldHalf,
  BatteryCharging,
  PlugZap,
  GlobeLock,
  Key,
  Lock,
  Glasses,
} from "lucide-react";

export const features = [
  {
    icon: <Key />,
    text: "Full End-to-End Encryption",
    description:
      "All our applications employ robust encryption, utilizing the most advanced algorithms, to guarantee the utmost security of your data.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Our security solutions are built for a vast amount of platforms and devices to ensure maximum digital safety for our users.",
  },
  {
    icon: <Lock />,
    text: "Top-Notch Security",
    description:
      "Secure your digital environments with our user-friendly interface, designed to provide top-notch security with ease.",
  },
  {
    icon: <IconDashboard />,
    text: "Extensive Amount of Services",
    description:
      "We provide a comprehensive suite of security solutions, encompassing a robust password manager, an encrypted calender, and an upcoming VPN service.",
  },
  {
    icon: <BatteryCharging />,
    text: "Regular Updates",
    description:
      "At LockScript, our team is continuously engaged in enhancing our security solutions by introducing new features and resolving existing issues.",
  },
  {
    icon: <Glasses />,
    text: "Managed By Experts",
    description:
      "Within LockScript, our team comprises of seasoned professionals with extensive expertise in both security and software development.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const checklistItems = [
  {
    title: "Review Your Digital Footprint",
    description:
      "Gain insights into your online presence and manage your digital identity effectively.",
  },
  {
    title: "Stop Automated Callers",
    description:
      "Prevent unwanted calls and maintain control over your communication channels.",
  },
  {
    title: "Control Your Data",
    description:
      "Ensure data privacy and security by managing your information with precision.",
  },
  {
    title: "Ensure Privacy in Minutes",
    description:
      "LockScript UI offers an intuitive and straightforward interface, ensuring seamless privacy and security management.",
  },
];
