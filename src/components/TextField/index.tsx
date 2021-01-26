import { ChangeEvent, useState } from 'react'

import * as S from './styled'

type TextFieldProps = {
  placeholder?: string
  value?: string
  onChangeCallback?: (value: string) => void
}

const TextField = ({
  value = '',
  onChangeCallback,
  placeholder = 'Digite alguma coisa...'
}: TextFieldProps) => {
  const [proxyValue, setProxyValue] = useState(value)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    const value = event.target.value

    setProxyValue(value)

    onChangeCallback && onChangeCallback(value)
  }

  return (
    <S.Container
      value={proxyValue}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default TextField
