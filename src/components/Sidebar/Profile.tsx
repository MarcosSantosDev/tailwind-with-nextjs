/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'

import Button from '@/components/Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/MarcosSantosDev.png"
        alt=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Marcos Santos
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          marcossantosdev@gmail.com
        </span>
      </div>

      <Button type="button" variant="gost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
