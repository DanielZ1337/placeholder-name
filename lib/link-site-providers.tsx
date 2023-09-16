import {
    CodepenIcon, Codesandbox,
    Dribbble,
    FacebookIcon,
    GithubIcon, GitlabIcon,
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
import {SiGlitch, SiMicrosoftazure, SiProducthunt, SiReplit, SiStackoverflow} from "react-icons/si";
import {CgBitbucket} from "react-icons/cg";
import {RxVercelLogo} from "react-icons/rx";
import {DiFirebase} from "react-icons/di";
import React from "react";

export const sites = [
    {
        name: 'Github',
        icon: GithubIcon
    },
    {
        name: 'Twitter',
        icon: TwitterIcon
    },
    {
        name: 'Linkedin',
        icon: LinkedinIcon
    },
    {
        name: 'Facebook',
        icon: FacebookIcon
    },
    {
        name: 'Instagram',
        icon: InstagramIcon
    },
    {
        name: 'Youtube',
        icon: YoutubeIcon
    },
    {
        name: 'Twitch',
        icon: TwitchIcon
    },
    {
        name: 'Tiktok',
        icon: BiLogoTiktok
    },
    {
        name: 'Snapchat',
        icon: BsSnapchat
    },
    {
        name: 'Reddit',
        icon: BsReddit
    },
    {
        name: 'Pinterest',
        icon: FaPinterest
    },
    {
        name: 'Medium',
        icon: FaMedium
    },
    {
        name: 'Dev.to',
        icon: PiDevToLogo
    },
    {
        name: 'Hashnode',
        icon: FaHashnode
    },
    {
        name: 'Stackoverflow',
        icon: SiStackoverflow
    },
    {
        name: 'Behance',
        icon: BsBehance
    },
    {
        name: 'Dribbble',
        icon: Dribbble
    },
    {
        name: 'Producthunt',
        icon: SiProducthunt
    },
    {
        name: 'Gitlab',
        icon: GitlabIcon
    },
    {
        name: 'Bitbucket',
        icon: CgBitbucket
    },
    {
        name: 'Codepen',
        icon: CodepenIcon
    },
    {
        name: 'Codesandbox',
        icon: Codesandbox
    },
    {
        name: 'Replit',
        icon: SiReplit
    },
    {
        name: 'Glitch',
        icon: SiGlitch
    },
    {
        name: 'Vercel',
        icon: RxVercelLogo
    },
    {
        name: 'Netlify',
        icon: BiLogoNetlify
    },
    {
        name: 'Heroku',
        icon: BiLogoHeroku
    },
    {
        name: 'Firebase',
        icon: DiFirebase
    },
    {
        name: 'Azure',
        icon: SiMicrosoftazure
    },
    {
        name: 'AWS',
        icon: FaAws
    }
] as const

export type sitesTypes = typeof sites[number]['name']
export const sitesNames = sites.map(site => site.name)