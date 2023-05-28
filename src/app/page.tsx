import Preview from '@/components/feature/preview'
import Prompt from '@/components/feature/prompt'

export default function Home() {
  return (
    <div className='w-full flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5'>
      <Prompt />
      <Preview />
    </div>
  )
}
