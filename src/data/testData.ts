import { selectOptions } from '@/types/prompt'

export const bountyOptions: selectOptions[] = [
  {
    label: 'Bounty',
    items: [
      { value: 'individual_prompt', label: 'Individual Prompt' },
      { value: 'individual_prompt_1', label: 'Individual Prompt 1' },
      { value: 'individual_prompt_2', label: 'Individual Prompt 2' },
      { value: 'individual_prompt_3', label: 'Individual Prompt 3' },
      { value: 'individual_prompt_4', label: 'Individual Prompt 4' },
    ],
  },
]

export const sideabr_menu = [
  {
    name: 'home',
    icon: '/home_icon.svg',
    href: '/dashboard',
    width: 16,
    height: 16,
  },
  {
    name: 'chat',
    icon: '/chat_icon.svg',
    href: '/chat',
    width: 18,
    height: 17,
  },
  {
    name: 'Create',
    icon: '/create_icon.svg',
    href: '/create',
    width: 16,
    height: 15,
  },
  {
    name: 'community',
    icon: '/community_icon.svg',
    href: '/community',
    width: 19,
    height: 14,
  },
  {
    name: 'collections',
    icon: '/collection_icon.svg',
    href: 'collections',
    width: 16,
    height: 18,
  },
  {
    name: 'bounty',
    icon: '/bounty_icon.svg',
    href: '/bounty',
    width: 20,
    height: 17,
  },
  {
    name: 'learn',
    icon: '/learn_icon.svg',
    href: '/learn',
    width: 16,
    height: 18,
  },
  {
    name: 'flux',
    icon: '/flux_icon.svg',
    href: '/flux',
    width: 17,
    height: 19,
  },
]
