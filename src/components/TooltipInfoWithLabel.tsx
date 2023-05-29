import { InfoIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Label } from './ui'

export default function TooltipInfoWithLabel({ label, info }: { label: string; info: string }) {
  return (
    <div className='flex items-center space-x-4'>
      <Label className='text-lg leading-3'>{label}</Label>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <InfoIcon className='text-[#9CA3AF] hover:text-white  text-xs md:text-base' />
          </TooltipTrigger>
          <TooltipContent>
            <p>{info}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
