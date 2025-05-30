import type { IValid } from '../../ui/reUi/useValid'
import InputText, { type IInputProps, type IInputTextEventParam } from '../InputText'
import { useInputText } from '../../ui/reUi/useUihook'

/**
 *
 */
export interface IUiInputTextProps extends IInputProps {
  /** 필수 고유값 */
  id: string
  init?: string
  valid?: IValid<string | undefined>
}

export default function UiInputText(props: IUiInputTextProps) {
  const { inputTextValue, changeValue } = useInputText({
    id: props.id,
    valid: props.valid,
    init: props.init,
  })

  const inputChange = (e: IInputTextEventParam) => {
    if (inputTextValue !== e.value) {
      const v = e.value ? e.value : ''
      changeValue(props.isPrice ? v.replaceAll(',', '') : v, e.id)
      if (props.change) {
        props.change(e)
      }
      if (props.next && e.type === 'next') {
        props.next(e)
      }
    }
  }

  return (
    <InputText
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      target={props.target}
      refTarget={props.refTarget}
      inputSize={props.inputSize}
      disabled={props.disabled}
      readOnly={props.readOnly}
      maxLength={props.maxLength}
      hidden={props.hidden}
      className={props.className}
      change={inputChange}
      value={inputTextValue ? inputTextValue : ''}
      isPrice={props.isPrice}
    />
  )
}
