import Head from 'next/head'

export default function About () {
  return (
    <div className='page'>
      <Head>
        <title>About | Bassel Kanso</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h2>Hello, I'm Bassel Kanso, I'm a software developer</h2>
      <p>
        I consider software development to be my craft, as a craftsperson I
        value my craft and I want to craft the best product I can, I value the
        way I write my code, I like to share it with other people and to talk
        about software as well. I hope to be someone who can inspire people into
        doing what they love and to pursue it passionately whatever it is.
        <br />
        As a software developer, I enjoy using my obsessive attention to detail,
        my unequivocal love for making things, and my mission-driven work ethic
        to literally change the world.
        <br />
        <br />
        If you want to talk about a project with me or talk about software over
        a cup of coffee, feel free to contact me on this email:{' '}
        <a href='mailto: basselkanso82@gmail.com'>basselkanso82@gmail.com </a>
        or hit me up on any of my social media accounts
      </p>
    </div>
  )
}
