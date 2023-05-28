import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='bg-primary'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Go <Link href='/'>Home</Link>
      </p>
    </div>
  )
}
