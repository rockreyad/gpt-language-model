import SavePrompt from '@/components/feature/savePrompt'

export default function Home() {
  return (
    <div className='w-full flex flex-col gap-y-5 lg:flex-row lg:gap-y-0 lg:gap-x-5 py-[13px] px-4'>
      <SavePrompt />
    </div>
  )
}
