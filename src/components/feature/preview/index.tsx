import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Label, Textarea, Slider, Button, Input } from '@/components/ui'
import MessageContainer from '../../MessageContainer'
import { PlayIcon } from 'lucide-react'
import PrimaryCard from '@/components/card/PrimaryCard'
import Image from 'next/image'

export default function Preview() {
  return (
    <div className='w-full'>
      <PrimaryCard>
        <div className='flex flex-col justify-between h-screen'>
          <div>
            <CardHeader>
              <CardTitle>Preview and Test</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='space-y-10'>
              <div className='grid justify-center space-y-5'>
                <MessageContainer
                  isBot={false}
                  message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam, ab odio id ea expedita odit quod sequi.kamdadadadadaadadaadadadadadadadadadadadadadadadadaadadadadadadadadadaad'
                />
                <MessageContainer
                  isBot={true}
                  message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam, ab odio id ea expedita odit quod sequi. Dolorum voluptates quos cumque ratione repellendus natus quibusdam sapiente provident magni incidunt repellat officia, mollitia, laborum, ipsum facere eveniet cum! Quis, fugit!'
                />
              </div>
            </CardContent>
          </div>
          <CardFooter className='items-center space-x-3 mb-10'>
            <Input
              type='text'
              className='bg-white text-gray-800 rounded-2xl'
              placeholder='Type your message here'
            />
            <Button
              size={'lg'}
              variant={'default'}
              className=' bg-white rounded-2xl text-black space-x-1'
            >
              <span> Send </span>
              <Image src='/assets/send.svg' alt='send' width='24' height='24' />
            </Button>
          </CardFooter>
        </div>
      </PrimaryCard>
    </div>
  )
}
