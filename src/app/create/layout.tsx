import SideMenu from '@/components/sidebar/SideMenu'
import Image from 'next/image'

export default function Createlayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideMenu />
      <div className='relative w-full h-screen overflow-y-auto'>
        <div className='absolute top-0 inset-x-0 h-[382px]'>
          <Image
            src='/assets/background_image.png'
            alt='background_image'
            fill
            className='h-full w-full'
          />
        </div>
        {children}
      </div>
    </>
  )
}
