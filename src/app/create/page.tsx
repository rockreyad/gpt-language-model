import Preview from '@/components/feature/preview'
import Prompt from '@/components/feature/prompt'

export default function Home() {
  return (
    <div className='w-full flex flex-col gap-y-10 lg:flex-row lg:gap-y-0 lg:gap-x-5 py-[13px] px-4'>
      <Prompt />
      <Preview />
    </div>
  )
}
