'use client'
import PrimaryCard from '@/components/card/PrimaryCard'
import { CardContent, CardHeader } from '@/components/ui/card'
import { Button, Input, Label, Textarea } from '@/components/ui'
import { Toaster } from '@/components/ui/Toaster'
import { useToast } from '@/components/ui/use-toast'
import { ChangeEvent, useState } from 'react'

import Image from 'next/image'
import { bountyOptions } from '@/data/testData'
import DynamicSelection from '@/components/DynamicSelection'

export default function SavePrompt() {
  //toats hook
  const { toast } = useToast()

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
    toast({
      title: 'Prompt saved ',
      description: 'Prompt saved successfully',
      duration: 3000,
    })
  }

  return (
    <>
      <PrimaryCard>
        <CardHeader>
          <Toaster />
        </CardHeader>
        <form onSubmit={handleSubmit} method='post'>
          <CardContent className='flex w-full space-x-5'>
            {/* JESUS GPT Avatar */}
            <div>
              <Image src='/assets/jesus_avatar.png' alt='me' width='72' height='72' />
            </div>

            <div className='w-full space-y-10'>
              {/* Prompt text Filed */}
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

              {/* Prompt description area */}
              <div className='w-full space-y-3'>
                <Label className='text-base'>
                  Description <span className='text-red-500'>*</span>
                </Label>
                <Textarea
                  id='prompt-description'
                  name='description'
                  value={prompt.description}
                  onChange={handleChange}
                  required
                  className='w-full bg-white bg-opacity-10 border-0'
                  placeholder='For Example: Generate personalized emails like a pro'
                />
              </div>

              {/* Prompt add tags */}
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

              {/* Prompt Select bounty */}
              <div className='w-full space-y-3'>
                <Label className='text-base'>
                  Bounty<span className='text-red-500'>*</span>
                </Label>
                <div className='bg-white bg-opacity-10 rounded-lg placeholder:text-opacity-20'>
                  <DynamicSelection options={bountyOptions} />
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
