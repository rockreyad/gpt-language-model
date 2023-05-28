import Image from 'next/image'

export default function Sidebar() {
  return (
    <div className='bg-primary h-screen'>
      <div className='bg-[#2E3033] bg-opacity-70 w-28'>
        <div className='grid justify-center gap-y-8'>
          <Image src='/logo.svg' alt='me' width='64' height='64' />
        </div>
        <div className='grid justify-center gap-4'>
          {menus.map((menu, index) => {
            return (
              <div
                key={index}
                style={{
                  background:
                    'linear-gradient(28.72deg,#3E3E3E -5.54%, #2C2C2C 62.1%, #979797 113.25%)',
                }}
                className='flex flex-col items-center justify-center space-y-2 py-4 px-1 rounded-3xl backdrop-blur-lg'
              >
                <Image src={'/assets' + menu.icon} alt={menu.name} width='24' height='24' />
                <span className='text-xs text-white capitalize'>{menu.name}</span>
              </div>
            )
          })}
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
  },
  {
    name: 'chat',
    icon: '/chat_icon.svg',
    href: '/chat',
  },
  {
    name: 'community',
    icon: '/community_icon.svg',
    href: '/community',
  },
  {
    name: 'collections',
    icon: '/collection_icon.svg',
    href: '/collections',
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
