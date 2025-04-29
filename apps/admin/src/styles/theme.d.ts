import 'styled-components'
import { Theme } from './theme'

/**
 * styled-components 를 사용하기위한 설정
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    extendsTheme: string
  }
}
