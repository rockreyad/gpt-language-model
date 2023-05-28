import { cn } from '@/lib/utils'
import { variantType } from '@/types/prompt'
import GptAvatar from './GptAvatar'

export default function GPTModelSwitch({
  variant,
  isActive,
  name,
}: {
  variant: variantType
  isActive: boolean
  name: string
}) {
  return (
    <div
      className={cn(
        isActive ? 'bg-white bg-opacity-20' : 'hover:outline',
        'px-2 py-2 rounded-2xl w-48 flex items-center space-x-4 hover:cursor-pointer'
      )}
    >
      <GptAvatar variant={variant} />
      <span className='text-base uppercase'>{name}</span>
    </div>
  )
}
