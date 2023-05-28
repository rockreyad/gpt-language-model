'use client'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Plus } from 'lucide-react'

import GPTModelSwitch from '../../GPTModelSwitch'
import PrimaryCard from '@/components/card/PrimaryCard'
import TooltipInfoWithLabel from '@/components/TooltipInfoWithLabel'
import { Label, Textarea, Slider, Button } from '@/components/ui'
import { useState } from 'react'
import { useGptModelSwitch } from '@/context/GPTModelSwitch'

export default function Prompt() {
  const [temprature, setTemprature] = useState(Number('0.8'))
  //Prompt Message
  const [message, setMessage] = useState('')
  //Gpt Model Switch
  const { activeIndex, handleOnClick } = useGptModelSwitch()

  //Slider Temprature change
  function handleTempratureChange(value: number[]) {
    setTemprature(value[0])
    console.log(value[0])
  }

  //
  return (
    <div className='w-full'>
      <PrimaryCard>
        <CardHeader>
          <CardTitle>Prompt</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className='space-y-10'>
          <Textarea
            style={{
              background: 'rgba(255,255,255,0.15)',
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='bg-white bg-opacity-10 rounded-xl text-white w-full h-32 p-4'
            placeholder='Type your message here.'
          />

          <div className='flex justify-between items-center'>
            <TooltipInfoWithLabel label='Variables' info='an awesome tooltip information' />
            <Button variant={'default'} className='bg-transparent text-base space-x-2'>
              <Plus className='w-4 h-4' /> <span> Add</span>
            </Button>
          </div>

          <div className='space-y-2'>
            <div className='flex justify-between items-center '>
              <div className='flex items-center space-x-4'>
                <Label className='text-lg leading-3'>Context</Label>
              </div>
              <Button variant={'default'} className='bg-transparent text-base space-x-2'>
                <Plus className='w-4 h-4' /> <span> Add</span>
              </Button>
            </div>
            <div className='bg-white bg-opacity-20 p-4 rounded-2xl'>
              <p>You can import datasets as context</p>
            </div>
          </div>

          <div className='space-y-3'>
            <Label className='text-lg leading-3'>Configuration Settings</Label>
            <div className='space-y-5'>
              <div className='space-y-3'>
                <h6 className='lowercase text-white text-opacity-80'>models</h6>
                <div className='flex space-x-5'>
                  <GPTModelSwitch
                    variant='black'
                    isActive={activeIndex === 0}
                    name='Gpt-4'
                    onClick={() => handleOnClick(0)}
                  />
                  <GPTModelSwitch
                    variant='black'
                    isActive={activeIndex === 1}
                    name='Gpt-5'
                    onClick={() => handleOnClick(1)}
                  />
                  <GPTModelSwitch
                    variant='black'
                    isActive={activeIndex === 2}
                    name='Gpt-6'
                    onClick={() => handleOnClick(2)}
                  />
                </div>
              </div>
              <div className='space-y-3'>
                <h6 className='lowercase text-white text-opacity-80'>temprature</h6>
                <div className='flex space-x-1'>
                  <Slider
                    onValueChange={(value) => handleTempratureChange(value)}
                    defaultValue={[0.8]}
                    value={[temprature]}
                    max={1}
                    step={0.1}
                    className='w-1/2'
                  />
                  <span>{temprature}</span>
                </div>
              </div>

              <div className='space-y-3'>
                <h6 className='lowercase text-white text-opacity-80'>system message</h6>
                <Textarea
                  className='bg-white bg-opacity-20 rounded-xl text-white w-full h-32 p-4 placeholder:text-white placeholder-opacity-50'
                  placeholder='You are a assistant that try to help me'
                  disabled
                />
              </div>
            </div>
          </div>
        </CardContent>
      </PrimaryCard>
    </div>
  )
}
