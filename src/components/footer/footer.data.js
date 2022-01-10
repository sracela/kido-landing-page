import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaLinkedin,
} from "react-icons/fa";

export default {
  menuItem: [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: '#tourism',
      label: 'Tourism',
    },
    {
      path: '#mobility',
      label: 'Mobility',
    },
    {
      path: '#retail',
      label: 'Retail',
    },
  ],
  company: [
    {
      path: '/about-us',
      label: 'About Us',
    },
    {
      path: '/',
      label: 'Terms',
    },
    {
      path: '/https://app.kido-es.kidodynamics.com/PSI.pdf',
      label: 'Privacy Policy',
    },
    {
      path: '/blog',
      label: 'Blog',
    },
    {
      path: '/careers',
      label: 'Careers',
    },
    {
      path: '/news',
      label: 'Press',
    },
  ],
  social: [
    {
      path: "https://www.linkedin.com/company/kido-dynamics/",
      icon: <FaLinkedin />,
    },
    {
      path: "https://twitter.com/kidodynamics",
      icon: <FaTwitter />,
    },
  ]
};
