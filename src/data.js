import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'random',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/project',
    text: 'project',
  },
  {
    id: 4,
    url: '/contant',
    text: 'contant',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
]

export const socialMedia = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/chukwu-ernest-monday-micheal-b7265922a/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B9VAK0%2Bl9TUGHHxj9s8uN5Q%3D%3D',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/chukwu-ernest-monday-micheal-b7265922a/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B9VAK0%2Bl9TUGHHxj9s8uN5Q%3D%3D',
    icon: <FaFacebookSquare />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/chukwu-ernest-monday-micheal-b7265922a/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B9VAK0%2Bl9TUGHHxj9s8uN5Q%3D%3D',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: 'https://github.com/chukwuernest',
    icon: <FaSquareGithub />,
  },
  {
    id: 5,
    url: 'https://github.com/chukwuernest',
    icon: <FaTwitter />,
  },
  {
    id: 6,
    url: 'chukwu17mc@gmail.com',
    icon: <BiLogoGmail />,
  },
  {
    id: 7,
    url: 'https://github.com/chukwuernest',
    icon: <FaWhatsapp />,
  },
]
