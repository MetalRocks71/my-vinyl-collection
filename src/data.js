import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'  

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
  { id: 5, href: '#featured', text: 'featured' },

]
export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://x.com/', icon: 'fa-brands fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',    
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    title: 'Tibet Adventure',
    date: 'august 26th, 2023',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    cost: '$2100',
  },
  {
    id: 2,
    image: tour2,
    title: 'best of java',
    date: 'september 15th, 2023',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    cost: '$2100',
  },
  {
    id: 3,
    image: tour3,
    title: 'explore hong kong',
    date: 'september 15th, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    cost: '$2100',
  },
  {
    id: 4,
    image: tour4,
    title: 'kenya highlights',
    date: 'september 15th, 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    cost: '$2100',
  },
]