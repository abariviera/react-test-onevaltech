import ProfileHeading from "../components/organisms/profile-heading/profile-heading"
import Header from "../components/organisms/header/header"
import PraiseGrid from "../components/organisms/praise-grid/praise-grid"
import Login from "./login"

export default function Home() {
  const praises = [
    {
      image: '/images/profile-1.png',
      alt: 'Profile 1',
      comment: 'Ana helped me to create my first vuejs component.',
      name: 'Bruno Freitas',
      date: '16/09/2021',
    },
    {
      image: '/images/profile-2.png',
      alt: 'Profile 1',
      comment: 'I was having trouble to setup my first sitecore project. Ana was so sweet to take some time to help me out. Thank you!',
      name: 'Rebecca',
      date: '16/09/2021',
    },
    {
      image: '/images/profile-3.png',
      alt: 'Profile 1',
      comment: 'Ana is a rockstar in NuxtJS! Thank you so much for helping me out.',
      name: 'Floriano Cardozo',
      date: '16/09/2021',
    },
    {
      image: '/images/profile-4.jpg',
      alt: 'Profile 1',
      comment: 'Ana helped to build a solid BE architecture for the new Project. Thanks!',
      name: 'Jacqueline Oliveira',
      date: '16/09/2021',
    }
  ]

  return (
    <div>
        <Login></Login>
    </div>
  )
}
