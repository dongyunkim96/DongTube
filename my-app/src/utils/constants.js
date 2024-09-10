import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiHanger } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";

export const categories = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icons: <MdLocalFireDepartment />, type: "category" },
    { name: "JavaScript", icons: <IoLogoJavascript />, type: "category" },
    { name: "ReactJs", icons: <FaReact />, type: "category" },
    { name: "Music", icons: <CgMusicNote />, type: "category" },
    { name: "Films", icons: <FiFilm />, type: "category" },
    { name: "Live", icons: <MdLiveTv />, type: "category" },
    { name: "Gaming", icons: <SiYoutubegaming />, type: "category" },
    { name: "News", icons: <ImNewspaper />, type: "category" },
    { name: "Sports", icons: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icons: <RiLightbulbLine />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiHanger />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },    
];