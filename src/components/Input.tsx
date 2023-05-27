import { Fragment, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
}

export function Input({ value, handleChange, ...rest }: InputProps) {
  return (
    <Fragment>
      <input
        className="w-full px-4 py-2 rounded-md bg-gray-200"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleChange(e.target.value)}
        {...rest}
      />
    </Fragment>
  )
}
