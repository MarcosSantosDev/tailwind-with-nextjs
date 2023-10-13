'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export const Control = (props: ControlProps) => {
  const { id, onFilesSelected } = useFileInput()

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const files = Array.from(event.target.files)

      onFilesSelected(files)
    }
  }

  return (
    <input
      {...props}
      className="sr-only"
      type="file"
      onChange={handleFilesSelected}
      id={id}
    />
  )
}
