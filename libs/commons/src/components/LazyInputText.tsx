import { lazy, Suspense } from 'react'
import type { IInputProps } from './InputText'
import type { IUiInputTextProps } from './ui/UiInputText'

const InputText = lazy(() => import('./InputText'))
const UiInputText = lazy(() => import('./ui/UiInputText'))
const ValidInputText = lazy(() => import('./valid/ValidInputText'))

export function LazyInputText(props: IInputProps) {
  return (
    <>
      <Suspense>
        <InputText {...props} />
      </Suspense>
    </>
  )
}

export function LazyUiInputText(props: IUiInputTextProps) {
  return (
    <>
      <Suspense>
        <UiInputText {...props} />
      </Suspense>
    </>
  )
}

export function LazyValidInputText(props: IUiInputTextProps) {
  return (
    <>
      <Suspense>
        <ValidInputText {...props} />
      </Suspense>
    </>
  )
}
