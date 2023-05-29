'use client'
import Image from 'next/image'
import { CardTitle } from '../ui/card'
import { CameraIcon, LayoutList } from 'lucide-react'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'
import { useSidebar } from '@/context/SidebarContext'

export default function SideMenu() {
  const path = usePathname()
  const { toggleSidebar } = useSidebar()
  return (
    <div className={cn(!toggleSidebar ? 'hidden' : 'bg-[#1A1B1E] w-80')}>
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
          <Image
            className='text-white text-opacity-60'
            src='/assets/chat_icon.png'
            alt='chatbot'
            width={20}
            height={20}
          />{' '}
          <span className='text-base leading-5 capitalize text-white text-opacity-60'>chatbot</span>
        </Badge>
        <div className='grid gap-y-4 py-14'>
          <Link href={'/create'}>
            <div
              className={cn(
                'flex py-3 px-3 rounded-2xl space-x-4 hover:bg-gradient-to-tr from-[#3E3E3E] via-[#2C2C2C] to-[#979797]',
                path === '/create' && 'bg-gradient-to-tr from-[#3E3E3E] via-[#2C2C2C] to-[#979797]'
              )}
            >
              {/* <Settings /> */}
              <Image
                src='/assets/settings_icon.png'
                alt='setting'
                height={100}
                width={100}
                className='w-[21.8px] h-[21.8px]'
              />
              <span className=''>Prompt</span>
            </div>
          </Link>
          <Link href={'/create/basics'}>
            <div
              className={cn(
                'flex py-3 px-3 rounded-2xl space-x-4 hover:bg-gradient-to-tr from-[#3E3E3E] via-[#2C2C2C] to-[#979797]',
                path === '/create/basics' &&
                  'bg-gradient-to-tr from-[#3E3E3E] via-[#2C2C2C] to-[#979797]'
              )}
            >
              <LayoutList />
              {/* <Image
                src='/assets/list_icon.png'
                alt='setting'
                height={100}
                width={100}
                className='w-[23px] h-[21px]'
              /> */}
              <span className=''>Basics</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
