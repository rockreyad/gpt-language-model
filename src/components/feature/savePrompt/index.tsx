'use client'
import PrimaryCard from '@/components/card/PrimaryCard'
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button, Input, Label, Textarea } from '@/components/ui'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export default function SavePrompt() {
  const [prompt, setPrompt] = useState({
    name: '',
    description: '',
    tags: '',
    bounty: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPrompt((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  //form submition
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(prompt)
    toast({
      title: 'Prompt saved ',
      description: 'Prompt saved successfully',
      duration: 3000,
    })
  }

  //toats hook
  const { toast } = useToast()
  return (
    <>
      <PrimaryCard>
        <CardHeader>
          <Toaster />
        </CardHeader>
        <form onSubmit={handleSubmit} method='post'>
          <CardContent className='flex w-full space-x-5'>
            <div>
              <Image src='/assets/jesus_avatar.png' alt='me' width='72' height='72' />
            </div>
            <div className='w-full space-y-10'>
              <div className='w-full space-y-3'>
                <Label className='text-base'>
                  Name of Prompt <span className='text-red-500'>*</span>
                </Label>
                <Input
                  type='text'
                  id='prompt-name'
                  name='name'
                  value={prompt.name}
                  onChange={handleChange}
                  required
                  className='w-full bg-white bg-opacity-10 border-0'
                  placeholder='JesusGPT'
                />
              </div>
              <div className='w-full space-y-3'>
                <Label className='text-base'>
                  Description <span className='text-red-500'>*</span>
                </Label>
                <Textarea
                  id='prompt-description'
                  name='description'
                  value={prompt.description}
                  onChange={handleChange}
                  className='w-full bg-white bg-opacity-10 border-0'
                  placeholder='For Example: Generate personalized emails like a pro'
                />
              </div>
              <div className='w-full space-y-3'>
                <Label className='text-base'>
                  Tags<span className='text-red-500'>*</span>
                </Label>
                <Input
                  type='text'
                  id='prompt-tags'
                  name='tags'
                  value={prompt.tags}
                  onChange={handleChange}
                  required
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
                <Button
                  type='submit'
                  size={'lg'}
                  variant={'secondary'}
                  className='rounded-3xl px-12'
                >
                  Save
                </Button>
              </div>
            </div>
          </CardContent>
        </form>
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
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/Toaster'

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
