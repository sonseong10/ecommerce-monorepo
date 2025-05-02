import { ValidType } from '@ecommerce/commons'
import { memo, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { UiInputText } from './InputText'

const PasswordWrap = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 0;
  border-color: var(--border-primary);
  height: 36px;
  width: 135px;
  border: 0;
  position: relative;
`

const PasswordInput = styled(UiInputText)`
  width: 100% !important;
  padding-right: 26px;
  &:focus {
    border-color: var(--border-focus);
  }
`

const PasswordIcon = styled.div<{ isShow: boolean }>`
  position: absolute;
  top: 18%;
  right: 4px;
  width: 20px;
  height: 20px;
  > button {
    padding: 0;
    width: 20px;
    height: 20px;
    border: none;
  }
`

interface IInputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  value?: string
  change?: (value: string, id?: string) => Promise<void> | void
}

const InputPassword = (props: IInputPasswordProps): JSX.Element => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [value, setValue] = useState(props.value ? props.value : '')

  const changeHandler = useCallback(
    (value: string) => {
      setValue(value)
      if (props.change) {
        props.change(value)
      }
    },
    [value],
  )

  const change = useCallback(() => {
    setIsShow(true)
  }, [])

  const outChange = useCallback(() => {
    setIsShow(false)
  }, [])

  useEffect(() => {
    if (value !== props.value) {
      setValue(props.value as string)
    }
  }, [props.value])
  return (
    <PasswordWrap>
      <PasswordInput
        valid={{ required: true, type: ValidType.PASSWORD }}
        value={value}
        change={changeHandler}
        {...props}
        type={!isShow ? 'password' : 'text'}
      />
      <PasswordIcon isShow={isShow}>
        <Button
          thin
          btntype="ghost"
          title={!isShow ? '비밀번호 감추기' : '비밀번호 보이기'}
          onMouseDown={change}
          onMouseUp={outChange}
          iconName={isShow ? 'PasswordShow' : 'PasswordHide'}
          iconPosition={'center'}
        />
      </PasswordIcon>
    </PasswordWrap>
  )
}

export default memo(InputPassword)
