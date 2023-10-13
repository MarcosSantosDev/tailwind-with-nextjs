/* eslint-disable @next/next/no-img-element */
'use client'

import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export const ImagePreview = () => {
  const { files } = useFileInput()

  const previewUrl = useMemo(() => {
    if (files.length > 0) {
      const [firstFile] = files

      return URL.createObjectURL(firstFile)
    }
    return null
  }, [files])

  if (previewUrl) {
    return (
      <img
        src={previewUrl}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
      <User className="h-8 w-8 text-violet-500" />
    </div>
  )
}
