'use client'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <div className='bg-white bg-opacity-25 p-2 w-full text-white'></div>
        <h2>Something went wrong! </h2>
        <p> {error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
