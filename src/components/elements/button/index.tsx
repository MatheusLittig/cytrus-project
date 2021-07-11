import { HTMLProps } from 'react'

interface Button extends HTMLProps<HTMLButtonElement> {
  title?: string
  icon?: JSX.Element
  variant?: 'rounded' | 'default'
}

export function Button({
  title,
  variant = 'default',
  icon
}: Button): JSX.Element {
  return (
    <>
      {variant === 'default' && (
        <button className="h-8 px-2 flex items-center rounded-md justify-center border border-gray-600 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            {icon}
            <p>{title}</p>
          </div>
        </button>
      )}

      {variant === 'rounded' && (
        <button className="h-8 w-8 flex items-center rounded-full justify-center border border-gray-600 text-sm text-gray-600">
          {icon}
        </button>
      )}
    </>
  )
}
