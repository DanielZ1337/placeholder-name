import {
    CodepenIcon,
    Codesandbox,
    Dribbble,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitchIcon,
    TwitterIcon,
    YoutubeIcon
} from "lucide-react";
import {BiLogoHeroku, BiLogoNetlify, BiLogoTiktok} from "react-icons/bi";
import {BsBehance, BsReddit, BsSnapchat} from "react-icons/bs";
import {FaAws, FaMedium, FaPinterest} from "react-icons/fa";
import {PiDevToLogo} from "react-icons/pi";
import {FaHashnode} from "react-icons/fa6";
import {SiGlitch, SiMicrosoftazure, SiProducthunt, SiReplit, SiStackoverflow, SiVercel} from "react-icons/si";
import {CgBitbucket} from "react-icons/cg";
import {DiFirebase} from "react-icons/di";

export const sites = [
    {
        name: "Github",
        icon: GithubIcon,
        color: "#333333"
    },
    {
        name: "Twitter",
        icon: TwitterIcon,
        color: "#1DA1F2"
    },
    {
        name: "Linkedin",
        icon: LinkedinIcon,
        color: "#0a66c2"
    },
    {
        name: "Facebook",
        icon: FacebookIcon,
        color: "#1877f2"
    },
    {
        name: "Instagram",
        icon: InstagramIcon,
        color: "#405de6"
    },
    {
        name: "Youtube",
        icon: YoutubeIcon,
        color: "#ff0000"
    },
    {
        name: "Twitch",
        icon: TwitchIcon,
        color: "#6441a5"
    },
    {
        name: "Tiktok",
        icon: BiLogoTiktok,
        color: "#000000"
    },
    {
        name: "Snapchat",
        icon: BsSnapchat,
        color: "#fffc00"
    },
    {
        name: "Reddit",
        icon: BsReddit,
        color: "#ff4500"
    },
    {
        name: "Pinterest",
        icon: FaPinterest,
        color: "#bd081c"
    },
    {
        name: "Medium",
        icon: FaMedium,
        color: "#000000"
    },
    {
        name: "Dev.to",
        icon: PiDevToLogo,
        color: "#0a0a0a"
    },
    {
        name: "Hashnode",
        icon: FaHashnode,
        color: "#2962ff"
    },
    {
        name: "Stackoverflow",
        icon: SiStackoverflow,
        color: "#f48024"
    },
    {
        name: "Behance",
        icon: BsBehance,
        color: "#1769ff"
    },
    {
        name: "Dribbble",
        icon: Dribbble,
        color: "#ea4c89"
    },
    {
        name: "Producthunt",
        icon: SiProducthunt,
        color: "#da552f"
    },
    {
        name: "Gitlab",
        icon: GitlabIcon,
        color: "#fc6d26"
    },
    {
        name: "Bitbucket",
        icon: CgBitbucket,
        color: "#0052cc"
    },
    {
        name: "Codepen",
        icon: CodepenIcon,
        color: "#000000"
    },
    {
        name: "Codesandbox",
        icon: Codesandbox,
        color: "#000000"
    },
    {
        name: "Replit",
        icon: SiReplit,
        color: "#1d2021"
    },
    {
        name: "Glitch",
        icon: SiGlitch,
        color: "#000000"
    },
    {
        name: "Vercel",
        icon: SiVercel,
        color: "#000000"
    },
    {
        name: "Netlify",
        icon: BiLogoNetlify,
        color: "#000000"
    },
    {
        name: "Heroku",
        icon: BiLogoHeroku,
        color: "#430098"
    },
    {
        name: "Firebase",
        icon: DiFirebase,
        color: "#ffca28"
    },
    {
        name: "Azure",
        icon: SiMicrosoftazure,
        color: "#0089d6"
    },
    {
        name: "AWS",
        icon: FaAws,
        color: "#232f3e"
    }
] as const

export type sitesNames = typeof sites[number]["name"]
export const sitesNames = sites.map(site => site.name)
export const sitesIcons = sites.map(site => site.icon)
export const sitesColors = sites.map(site => site.color)