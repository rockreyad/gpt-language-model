import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Button, Input } from '@/components/ui'
import MessageContainer from '../../MessageContainer'
import PrimaryCard from '@/components/card/PrimaryCard'
import Image from 'next/image'

export default function Preview() {
  return (
    <div className='w-full'>
      <PrimaryCard>
        <div className='flex flex-col justify-between h-fit md:h-screen'>
          <div>
            <CardHeader>
              <CardTitle>Preview and Test</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='space-y-10'>
              <div className='grid justify-center space-y-5'>
                <MessageContainer
                  isBot={false}
                  message='You are a multilingual assistant that translates from english to French: Hello!'
                />
                <MessageContainer
                  isBot={true}
                  message='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
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
