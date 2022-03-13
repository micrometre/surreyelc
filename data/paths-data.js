import { FaHome, FaPhone, FaContact, FaPaintBrush, FaPaintRoller, FaWater, FaBusinessTime, FaAddressCard, FaEnvelope } from 'react-icons/fa';
export const data = [
  {
    contact: [
      {
        name: 'Home',
        title: "home page",
        subtitle: "homepage ",
        href: '/',
        icons: FaHome
      },
      {
        name: 'Interior',
        title: "Interior page",
        subtitle: "homepage ",
        href: '/interior',
        icons: FaPaintBrush
      },
      {
        name: 'Exterior',
        title: "Exterior page",
        subtitle: "homepage ",
        href: '/exterior',
        icons: FaEnvelope
      },
     {
        name: 'River Access',
        title: "River Access page",
        subtitle: "homepage ",
        href: '/river',
        icons: FaWater
     },
     {
        name: 'Painting Decoaration',
        title: "Painting page",
        subtitle: "homepage ",
        href: '/painting',
        icons: FaPaintRoller
     },
     {
        name: 'Commercial',
        title: "Commercial page",
        subtitle: "homepage ",
        href: '/commercial',
        icons: FaBusinessTime
     },
     {
        name: 'Contact',
        title: "Contact page",
        subtitle: "homepage ",
        href: '/contact',
        icons: FaAddressCard
     },
    ]
  }
];
