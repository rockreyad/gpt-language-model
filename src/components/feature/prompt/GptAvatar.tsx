import { variantType } from '@/types/prompt'
import Image from 'next/image'

export default function GptAvatar({ variant }: { variant?: variantType }) {
  let imageSrc = '/assets/gpt_black.png'

  switch (variant) {
    case 'green':
      imageSrc = '/assets/gpt_green.png'
      break
    default:
      imageSrc = '/assets/gpt_black.png'
  }

  return (
    <div className='flex items-center space-x-2 w-max'>
      <Image src={imageSrc} width={32} height={32} alt='gpt-icon' className='w-12 h-12' />
    </div>
  )
}
