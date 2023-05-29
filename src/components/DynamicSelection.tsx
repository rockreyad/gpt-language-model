import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { selectOptions } from '@/types/prompt'
import { useState } from 'react'

export default function DynamicSelection({ options }: { options: selectOptions[] }) {
  //Selected value state
  const [selected, setSelected] = useState('')

  const handleSelect = (value: string) => {
    setSelected(value)
    //eslint-disable-next-line
    console.log(selected)
  }

  return (
    <>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className='border-0'>
          <SelectValue placeholder='Select a Bounty' />
        </SelectTrigger>
        <SelectContent>
          {options.map((group) => (
            <SelectGroup key={group.label}>
              <SelectLabel>{group.label}</SelectLabel>
              {group.items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
