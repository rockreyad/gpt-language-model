import { Card } from '../ui'

export default function PrimaryCard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Card
        style={{
          background: 'rgba(26,27,30,0.85)',
          backdropFilter: 'blur(2px)',
          borderRadius: '16x 16px 0px 0px',
        }}
        className='bg-primary text-white outline-none border-0 w-full'
      >
        {children}
      </Card>
    </>
  )
}
