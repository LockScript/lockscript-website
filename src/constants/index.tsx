import {IconDashboard} from "@tabler/icons-react";
import {
  BatteryCharging,
  Fingerprint,
  Glasses,
  Key,
  Lock,
  Settings,
  Shield,
  Vault,
  VenetianMask
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

export const products = [
  {
    icon: <Vault />,
    text: "LockScript Vault",
    description:
      "LockScript Vault is a secure password manager, employing robust encryption with advanced algorithms to ensure the utmost security of your data.",
    href: "/vault",
  },
  {
    icon: <VenetianMask />,
    text: "LockScript Spectra",
    description:
      "LockScript Spectra is an OSINT service, providing comprehensive data gathering and removal across various platforms and devices for maximum digital safety.",
    href: "/spectra",
  },
  {
    icon: <Settings />,
    text: "LockScript Automate",
    description:
      "LockScript Automate is a task automation tool, allowing you to automate tasks such as sending Slack messages, managing Google Drive files, and more with ease.",
    href: "/automate",
  },
  {
    icon: <Shield />,
    text: "LockScript VPN",
    description:
      "LockScript VPN is part of our comprehensive suite of security solutions, providing a secure and encrypted connection for your online activities. The product is upcoming and will be released soon.",
    href: "/vpn",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "LockScript Vault",
      "LockScript Mail",
      "5 Gb Storage",
      "1 Gb Mail Storage",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "LockScript Automate",
      "LockScript Spectra",
      "LockScript Vault",
      "LockScript Mail",
      "20 Gb Storage",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "All Pro Features for up to 20 Members",
      "Fastest Support",
      "Security Audits for your Enterprise",
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

export const resourcesLinks = [
  { href: "https://github.com/LockScript", text: "Github" },
  { href: "https://www.cvs0.xyz", text: "cvs0.xyz" },
  { href: "https://www.5skn.xyz", text: "5skn.xyz" },
  { href: "https://www.x.com", text: "X" },
  { href: "/jobs", text: "Jobs" },
];

export const platformLinks = [
  { href: "/privacy", text: "Privacy Policy" },
  { href: "/governance", text: "Governance" },
  { href: "/security-concerns", text: "Security Concerns" },
  { href: "/bugs", text: "Bug Reporting" },
  { href: "/features", text: "Feature Requests" },
];

export const communityLinks = [
  { href: "/events", text: "Events" },
  { href: "/blog", text: "Blog" },
  { href: "/hackathons", text: "Hackathons" },
  { href: "https://discord.gg/Jq6AdmXQvM", text: "Discord" },
];
