import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Plus } from 'lucide-react'

import GPTModelSwitch from './GPTModelSwitch'
import PrimaryCard from '@/components/card/PrimaryCard'
import TooltipInfoWithLabel from '@/components/TooltipInfoWithLabel'
import { Label, Textarea, Slider, Button } from '@/components/ui'

export default function Prompt() {
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
                  <GPTModelSwitch variant='black' isActive={true} name='Gpt-4' />
                  <GPTModelSwitch variant='black' isActive={false} name='Gpt-4' />
                  <GPTModelSwitch variant='black' isActive={false} name='Gpt-4' />
                </div>
              </div>
              <div className='space-y-3'>
                <h6 className='lowercase text-white text-opacity-80'>temprature</h6>
                <div className='flex space-x-1'>
                  <Slider defaultValue={[0.8]} max={1} step={0.1} className='w-1/2' />
                  <span>0.8</span>
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
