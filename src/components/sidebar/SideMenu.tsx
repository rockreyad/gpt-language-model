import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { CameraIcon, LayoutList, MessageSquare, Settings } from 'lucide-react'
import { Badge } from '../ui/badge'
import Link from 'next/link'

export default function SideMenu() {
  return (
    <div className='bg-[#1A1B1E] w-80'>
      <div className='w-80 bg-inherit text-white p-6'>
        <div className='flex flex-row space-x-5'>
          <div className='bg-[#9F9F9F] rounded-xl p-4'>
            <CameraIcon className='text-black font-semibold' />
          </div>
          <CardTitle className='text-base leading-5'>Language Translation Assistant</CardTitle>
        </div>
        <Badge
          variant={'default'}
          className='bg-white bg-opacity-20 flex justify-center mx-auto w-fit space-x-3 opacity-60 px-4 py-2'
        >
          <MessageSquare /> <span className='text-base leading-5 capitalize'>chatbot</span>
        </Badge>
        <div className='grid gap-y-4 py-14'>
          <Link href={'/'}>
            <div className='flex py-3 px-3 rounded-2xl space-x-4 hover:bg-gradient-to-tr from-[#3E3E3E] via-[#2C2C2C] to-[#979797]'>
              <Settings />
              <span className=''>Prompt</span>
            </div>
          </Link>
          <Link href={'/basics'}>
            <div className='flex py-3 px-3 rounded-2xl space-x-4 bg-gradient-to-tr from-[#3E3E3E] via-[#2C2C2C] to-[#979797]'>
              <LayoutList />
              <span className=''>Basics</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
