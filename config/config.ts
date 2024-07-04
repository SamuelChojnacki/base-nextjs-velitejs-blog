import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const config = {
  titre: "Mon site",
  description: "Un site web",
  langue: "fr",
  author: {
    nom: "Moi",
    linkedIn: "https://www.linkedin.com/in/moi/",
    agency: {
      site: "",
      linkedin: "",
    },
  },
  client: {
    nom: "Client",
    prenom: "",
    linkedIn: "",
    instagram: "",
    facebook: "",
    email: "",
    telephone: "",
  },
  MenuLinks: [
    {
      label: "Accueil",
      url: "/",
    },
    {
      label: "Eddy.S",
      url: "/services",
    },
    {
      label: "Portfolio",
      url: "/portfolio",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ],
  social : [
    {
       label : "Github",
       icon : FaGithub, 
       href : "https://github.com/SamuelChojnacki"
     }, 
 /*     {
       label : "Facebook",
       icon : FaFacebook, 
       href : "https://www.facebook.com/samuel.chojnacki"
     }, */
 /*     {
       label : "Instagram",
       icon : FaInstagram, 
       href : "https://www.instagram.com/ottleg_"
     }, */
 
    {
       label : "Twitter",
       icon : FaXTwitter, 
       href : "https://x.com/ChojnackiSamuel"
     } ,
    {
       label : "Linkedin",
       icon : FaLinkedin, 
       href : "https://x.com/ChojnackiSamuel"
     } 
   ],
};
