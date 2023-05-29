'use client'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Plus } from 'lucide-react'

import GPTModelSwitch from '../../GPTModelSwitch'
import PrimaryCard from '@/components/card/PrimaryCard'
import TooltipInfoWithLabel from '@/components/TooltipInfoWithLabel'
import { Label, Textarea, Slider, Button, Input } from '@/components/ui'
import { useState } from 'react'
import { useGptModelSwitch } from '@/context/GPTModelSwitch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Image from 'next/image'

export default function Prompt() {
  const [temprature, setTemprature] = useState(Number('0.8'))
  //Prompt Message
  const [message, setMessage] = useState('')
  //Gpt Model Switch
  const { activeIndex, handleOnClick } = useGptModelSwitch()

  //Slider Temprature change
  function handleTempratureChange(value: number[]) {
    setTemprature(value[0])
  }

  return (
    <div className='w-full'>
      <PrimaryCard>
        <CardHeader>
          <CardTitle>Prompt</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className='space-y-10'>
          {/* prompt message */}
          <Textarea
            style={{
              background: 'rgba(255,255,255,0.15)',
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='bg-white bg-opacity-10 rounded-xl text-white w-full h-32 p-4 border-0'
            placeholder='Type your message here.'
          />

          {/* Variables Sections */}
          <div className='space-y-3'>
            <div className='flex justify-between items-center'>
              <TooltipInfoWithLabel label='Variables' info='an awesome tooltip information' />
              <Button
                variant={'link'}
                className='bg-transparent text-base space-x-2 text-white/70 hover:text-white'
              >
                <Plus className='w-4 h-4' /> <span> Add</span>
              </Button>
            </div>

            <div>
              <Table className='bg-white bg-opacity-20 rounded-[8px]'>
                <TableHeader>
                  <TableRow>
                    <TableHead className=' text-white text-opacity-80'>option</TableHead>
                    <TableHead className=' text-white text-opacity-80'>variable name</TableHead>
                    <TableHead className=' text-white text-opacity-80'>example input</TableHead>
                    <TableHead className='text-right'></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-medium'>
                      <Tabs defaultValue='select' className='rounded-2xl'>
                        <TabsList className='bg-white bg-opacity-20'>
                          <TabsTrigger
                            className='capitalize text-white text-opacity-80 leading-6'
                            value='account'
                          >
                            text
                          </TabsTrigger>
                          <TabsTrigger
                            className='capitalize text-white text-opacity-80 leading-6'
                            value='select'
                          >
                            select
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </TableCell>
                    <TableCell>
                      <div className='flex items-center space-x-2'>
                        <span className='bg-white bg-opacity-50 rounded-md capitalize w-fit h-fit px-1.5 py-0.5 text-black text-opacity-60'>
                          T
                        </span>
                        <Input type='text' placeholder='output_language' className='w-[134px]' />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Select>
                        <SelectTrigger className='w-[140px] border-0 outline-none active:outline-none text-center'>
                          <SelectValue placeholder='+ add options' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup className='text-center'>
                            <SelectItem value='Hello!'>Hello!</SelectItem>
                            <SelectItem value='banana'>Banana</SelectItem>
                            <SelectItem value='blueberry'>Blueberry</SelectItem>
                            <SelectItem value='grapes'>Grapes</SelectItem>
                            <SelectItem value='pineapple'>Pineapple</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className='text-right'>
                      <Image src='/assets/remove_icon.svg' alt='remove' width={22} height={26} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Import Context */}
          <div className='space-y-3'>
            <div className='flex justify-between items-center '>
              <div className='flex items-center space-x-4'>
                <Label className='text-lg leading-3'>Context</Label>
              </div>
              <Button
                variant={'link'}
                className='bg-transparent text-base space-x-2 text-white/70 hover:text-white'
              >
                <Plus className='w-4 h-4' /> <span> Add</span>
              </Button>
            </div>
            <div className='bg-white bg-opacity-20 p-4 rounded-2xl'>
              <p>You can import datasets as context</p>
            </div>
          </div>

          {/* Select GPT Model */}
          <div className='space-y-3'>
            <Label className='text-lg leading-3'>Configuration Settings</Label>
            <div className='space-y-5'>
              <div className='space-y-3'>
                <h6 className='lowercase text-white text-opacity-80'>models</h6>
                <div className='flex flex-wrap md:flex-row space-y-2 md:space-y-0 md:space-x-2 lg:space-x-5'>
                  <GPTModelSwitch
                    variant='black'
                    isActive={activeIndex === 0}
                    name='Gpt-4'
                    onClick={() => handleOnClick(0)}
                  />
                  <GPTModelSwitch
                    variant='black'
                    isActive={activeIndex === 1}
                    name='Gpt-5'
                    onClick={() => handleOnClick(1)}
                  />
                  <GPTModelSwitch
                    variant='black'
                    isActive={activeIndex === 2}
                    name='Gpt-6'
                    onClick={() => handleOnClick(2)}
                  />
                </div>
              </div>

              {/* Tempratue Slider */}
              <div className='space-y-3'>
                <h6 className='lowercase text-white text-opacity-80'>temprature</h6>
                <div className='flex space-x-1'>
                  <Slider
                    onValueChange={(value) => handleTempratureChange(value)}
                    defaultValue={[0.8]}
                    value={[temprature]}
                    max={1}
                    min={0.1}
                    step={0.1}
                    className='w-1/2'
                  />
                  <span>{temprature}</span>
                </div>
              </div>

              {/* System Notification Message */}
              <div className='space-y-3'>
                <h6 className='lowercase text-white text-opacity-80'>system message</h6>
                <Textarea
                  className='bg-white bg-opacity-20 rounded-xl text-white w-full h-32 p-4 placeholder:text-white placeholder-opacity-50 border-0'
                  placeholder='You are a assistant that try to help me'
                  disabled
                />
              </div>
            </div>
          </div>
        </CardContent>
      </PrimaryCard>
    </div>
  )
}
