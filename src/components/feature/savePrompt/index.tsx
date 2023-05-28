import PrimaryCard from '@/components/card/PrimaryCard'
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import GptAvatar from '../prompt/GptAvatar'
import { Button, Input, Label, Textarea } from '@/components/ui'

export default function SavePrompt() {
  return (
    <>
      <PrimaryCard>
        <CardHeader></CardHeader>
        <CardContent className='flex w-full space-x-5'>
          <div>
            <GptAvatar variant='green' />
          </div>
          <div className='w-full space-y-10'>
            <div className='w-full space-y-3'>
              <Label className='text-base'>
                Name of Prompt <span className='text-red-500'>*</span>
              </Label>
              <Input className='w-full bg-white bg-opacity-10 border-0' placeholder='JesusGPT' />
            </div>
            <div className='w-full space-y-3'>
              <Label className='text-base'>
                Description <span className='text-red-500'>*</span>
              </Label>
              <Textarea
                className='w-full bg-white bg-opacity-10 border-0'
                placeholder='For Example: Generate personalized emails like a pro'
              />
            </div>
            <div className='w-full space-y-3'>
              <Label className='text-base'>
                Tags<span className='text-red-500'>*</span>
              </Label>
              <Input
                className='w-full bg-white bg-opacity-10 border-0'
                placeholder='Search for Tags...'
              />
            </div>

            <div className='w-full space-y-3'>
              <Label className='text-base'>
                Bounty<span className='text-red-500'>*</span>
              </Label>
              <div className='bg-white bg-opacity-10 rounded-lg placeholder:text-opacity-20'>
                <SelectBounty />
              </div>
            </div>
            <div>
              <Button size={'lg'} variant={'secondary'} className='rounded-3xl px-12'>
                Save
              </Button>
            </div>
          </div>
        </CardContent>
      </PrimaryCard>
    </>
  )
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectBounty() {
  return (
    <Select>
      <SelectTrigger className='border-0'>
        <SelectValue placeholder='Select a Bounty' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value='apple'>Individual Prompt</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='blueberry'>Blueberry</SelectItem>
          <SelectItem value='grapes'>Grapes</SelectItem>
          <SelectItem value='pineapple'>Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
