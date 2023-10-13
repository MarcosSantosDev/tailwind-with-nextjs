'use client'

import { Check } from 'lucide-react'
import * as SelectPrimitive from '@radix-ui/react-select'

export type SelectItemProps = SelectPrimitive.SelectItemProps & {
  text: string
}

function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <SelectPrimitive.ItemText className="text-black">
        {text}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

export default SelectItem
