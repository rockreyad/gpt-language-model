import GptAvatar from './feature/prompt/GptAvatar'

export default function MessageContainer({ isBot, message }: { isBot: boolean; message?: string }) {
  return (
    <>
      {isBot ? (
        <div className='flex space-x-2 justify-start'>
          <div>
            <GptAvatar variant='green' />
          </div>
          <p className='bg-white bg-opacity-20 p-4 rounded-2xl leading-5 w-10/12 break-all'>
            {message}
          </p>
        </div>
      ) : (
        <div className='flex space-x-2 justify-end'>
          <p className='bg-white bg-opacity-20 p-4 rounded-2xl leading-5 w-10/12 break-all'>
            {message}
          </p>
          <div>
            <GptAvatar variant='green' />
          </div>
        </div>
      )}
    </>
  )
}
