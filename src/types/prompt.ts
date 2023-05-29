export type variantType = 'green' | 'black'
export type selectOptions = {
  label: string
  items: selectOption[]
}

type selectOption = { value: string; label: string }
