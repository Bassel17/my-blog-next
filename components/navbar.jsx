import Link from 'next/link'
import Image from 'next/image'

export default function Navbar () {
  return (
    <div className='sidebar'>
      <Image
        src='/me.jpg'
        alt='Picture of the author'
        width={150}
        height={150}
        objectFit='cover'
        className='avatar'
        objectPosition='100% 0'
      />
      <div className='sidebar__links'>
        <Link href='/about'>
          <a>About Me</a>
        </Link>
        <Link href='/'>
          <a>Blog</a>
        </Link>
      </div>
    </div>
  )
}
