'use client'
import { useSidebar } from '@/context/SidebarContext'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const path = usePathname()
  const { toggleSidebar, setToggleSidebar } = useSidebar()

  function handleToggleSidebar() {
    setToggleSidebar(!toggleSidebar)
  }
  return (
    <div className={`h-screen bg-nav-pattern bg-no-repeat bg-cover bg-top`}>
      <div className='w-[77px] h-full pt-7 flex flex-col justify-between'>
        <div>
          {/* Brand icon */}
          <div className='grid justify-center'>
            <Image src='/logo.svg' alt='me' width='35' height='30' />
          </div>

          {/* Menu */}
          <div className='flex flex-col justify-center gap-y-1 pl-3 pr-2 pt-16'>
            {menus.map((menu, index) => {
              return (
                <Link
                  href={menu.href}
                  key={index}
                  className={cn(
                    'w-full flex flex-col items-center justify-center space-y-2 py-3 rounded-3xl hover:bg-gradient-to-tr from-[#3E3E3E] via-[#2C2C2C] to-[#979797]',
                    path.startsWith(menu.href) &&
                      'bg-gradient-to-tr from-[#3E3E3E] via-[#2C2C2C] to-[#979797]'
                  )}
                >
                  <Image src={'/assets' + menu.icon} alt={menu.name} width='16' height='16' />
                  <span className='text-[8px] text-white capitalize'>{menu.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
        {/* Sidebar action */}
        <div className='flex justify-center place-self-end cursor-pointer'>
          <Image
            onClick={() => handleToggleSidebar()}
            src={'/assets/side_reveal.png'}
            alt=''
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}

const menus = [
  {
    name: 'home',
    icon: '/home_icon.svg',
    href: '/dashboard',
    width: '16',
    height: '16',
  },
  {
    name: 'chat',
    icon: '/chat_icon.svg',
    href: '/chat',
  },
  {
    name: 'Create',
    icon: '/create_icon.svg',
    href: '/create',
  },
  {
    name: 'community',
    icon: '/community_icon.svg',
    href: '/community',
  },
  {
    name: 'collections',
    icon: '/collection_icon.svg',
    href: 'collections',
  },
  {
    name: 'bounty',
    icon: '/bounty_icon.svg',
    href: '/bounty',
  },
  {
    name: 'learn',
    icon: '/learn_icon.svg',
    href: '/learn',
  },
  {
    name: 'flux',
    icon: '/flux_icon.svg',
    href: '/flux',
  },
]

type menu = {
  name: string
  icon: string
  href: string
  children: menu[]
}
