/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import React from 'react'

export function Profile() {
  return (
    <div className="flex items-center gap-3 border-t border-zinc-200 pt-5">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/MarcosSantosDev.png"
        alt=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Marcos Santos
        </span>
        <span className="truncate text-sm text-zinc-500">
          marcossantosdev@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
