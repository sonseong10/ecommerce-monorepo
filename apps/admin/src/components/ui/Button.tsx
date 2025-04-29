import { forwardRef, useCallback, useState } from 'react'
import styled, { css, useTheme } from 'styled-components'
import type { Theme } from 'styles/theme'
import type { ButtonColor, ButtonIcon, ButtonSize, ButtonType } from 'commons/styles/ComponentsType'
import SVG from 'styles/svgIcon'

const BtnCommon = css<{
  thin?: boolean
  maxWidth?: string
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-width: ${props => (props.thin ? '1px' : '2px')};
  border-style: solid;
  border-radius: 4px;
  letter-spacing: -0.2px;
  transition: border 0.1s;
  max-width: ${props => (props.maxWidth ? props.maxWidth : 'auto')};

  &:hover {
    cursor: pointer;
  }

  &:disabled,
  &.is-disabled {
    cursor: not-allowed;
  }
`

const BtnColor = (color?: ButtonColor) => {
  const theme = useTheme()
  switch (color) {
    case 'primary':
      return {
        bg: (theme as Theme).colors.btnPrimary,
        hover: (theme as Theme).colors.btnPrimaryHover,
        disabled: (theme as Theme).colors.btnPrimaryDisabled,
      }
    case 'dark':
      return {
        bg: (theme as Theme).colors.btnDark,
        hover: (theme as Theme).colors.btnDarkHover,
        disabled: (theme as Theme).colors.btnDarkDisabled,
      }
    case 'negative':
      return {
        bg: (theme as Theme).colors.btnNegative,
        hover: (theme as Theme).colors.btnNegativeHover,
        disabled: (theme as Theme).colors.btnNegativeDisabled,
      }
    case 'warning':
      return {
        bg: (theme as Theme).colors.btnWarning,
        hover: (theme as Theme).colors.btnWarningHover,
        disabled: (theme as Theme).colors.btnWarningDisabled,
      }
    case 'positive':
      return {
        bg: (theme as Theme).colors.btnPositive,
        hover: (theme as Theme).colors.btnPositiveHover,
        disabled: (theme as Theme).colors.btnPositiveDisabled,
      }
    case 'white':
      return {
        bg: (theme as Theme).colors.btnWhite,
        hover: (theme as Theme).colors.btnWhiteHover,
        disabled: (theme as Theme).colors.btnWhiteDisabled,
      }
    case 'blue':
      return {
        bg: (theme as Theme).colors.btnBlue,
        hover: (theme as Theme).colors.btnBlueHover,
        disabled: (theme as Theme).colors.btnDisabled,
      }
    case 'gray':
      return {
        bg: (theme as Theme).colors.btnGray,
        hover: (theme as Theme).colors.btnGrayHover,
        disabled: (theme as Theme).colors.btnDisabled,
      }
    case 'lightGray':
      return {
        bg: (theme as Theme).colors.btnLightGray,
        hover: (theme as Theme).colors.btnLightGrayHover,
        disabled: (theme as Theme).colors.btnDisabled,
      }
    case 'green':
      return {
        bg: (theme as Theme).colors.btnGreen,
        hover: (theme as Theme).colors.btnGreenHover,
        disabled: (theme as Theme).colors.btnDisabled,
      }
    case 'cyan': //청록색
      return {
        bg: (theme as Theme).colors.btnCyan,
        hover: (theme as Theme).colors.btnCyanHover,
        disabled: (theme as Theme).colors.btnDisabled,
      }
  }
}

const useBtnSize = (btnSize?: ButtonSize, thin?: boolean, ellipsis?: boolean) => {
  const theme = useTheme()

  switch (btnSize) {
    case 'lg':
      return css`
        padding: 0 25px;
        border-radius: ${ellipsis ? '48px' : '10px'};
        line-height: ${thin ? '58px' : '56px'};
        font-size: ${(theme as Theme).fontSize.text.lg};
        font-weight: ${(theme as Theme).fontWeight.bold};
      `
    case 'md':
      return css`
        padding: 0 25px;
        border-radius: ${ellipsis && '48px'};
        line-height: ${thin ? '48px' : '46px'};
        font-size: ${(theme as Theme).fontSize.text.lg};
        font-weight: ${(theme as Theme).fontWeight.bold};
      `
    case 'normal':
      return css`
        padding: 0 20px;
        border-radius: ${ellipsis && '18px'};
        line-height: ${thin ? '38px' : '36px'};
        font-size: ${(theme as Theme).fontSize.text.lg};
      `
    case 'sm':
      return css`
        padding: 0 15px;
        border-radius: ${ellipsis && '18px'};
        line-height: ${thin ? '36px' : '34px'};
        font-size: ${(theme as Theme).fontSize.text.lg};
      `
    case 'xsm':
      return css`
        padding: 0 15px;
        border-radius: ${ellipsis && '18px'};
        line-height: ${thin ? '34px' : '32px'};
        font-size: ${(theme as Theme).fontSize.text.md};
      `
    case 'xs':
      return css`
        padding: 0 5px;
        border-radius: ${ellipsis && '14px'};
        line-height: ${thin ? '24px' : '22px'};
        font-size: ${(theme as Theme).fontSize.text.sm};
      `
  }
}

const BtnIconCommon = css<{ btnSize?: ButtonSize }>`
  content: '';
  display: inline-block;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;

  ${props => {
    switch (props.btnSize) {
      case 'xs':
        return css`
          width: 12px;
          height: 12px;
        `
      default:
        return css`
          width: 16px;
          height: 16px;
        `
    }
  }}
`

const BtnIcon = (
  iconName?: ButtonIcon | 'Write',
  color?: ButtonColor,
  btntype?: ButtonType,
  disabled?: boolean,
  isHover?: boolean,
) => {
  let iconColor
  if (btntype === 'border' || btntype === 'ghost') {
    if (disabled) {
      iconColor = BtnColor(color)?.disabled
    } else if (isHover) {
      iconColor = BtnColor(color)?.hover
    } else {
      iconColor = BtnColor(color)?.bg
    }
  } else {
    iconColor = '#fff'
  }

  switch (iconName) {
    case 'Delete':
      return css`
        background-image: url(${SVG.Delete(iconColor)});
      `
    case 'Excel':
      return css`
        background-image: url(${SVG.Excel(iconColor)});
      `
    case 'Plus':
      return css`
        background-image: url(${SVG.Plus(iconColor)});
      `
    case 'Setting':
      return css`
        background-image: url(${SVG.Setting(iconColor)});
      `
    case 'Memo':
      return css`
        background-image: url(${SVG.Memo(iconColor)});
      `
    case 'Closed':
      return css`
        background-image: url(${SVG.Closed(iconColor)});
      `
    case 'NextArrow':
      return css`
        background-image: url(${SVG.NextArrow(iconColor)});
      `
    case 'PrevArrow':
      return css`
        background-image: url(${SVG.NextArrow(iconColor)});
        transform: rotate(180deg);
      `
    case 'DownArrow':
      return css`
        background-image: url(${SVG.DownArrow(iconColor)});
      `
    case 'UpArrow':
      return css`
        background-image: url(${SVG.DownArrow(iconColor)});
        transform: rotate(180deg);
      `
    case 'Search':
      return css`
        background-image: url(${SVG.Search(iconColor)});
      `
    case 'Edit':
      return css`
        background-image: url(${SVG.Edit(iconColor)});
        background-size: 22px;
      `
    case 'Write':
      return css`
        background-image: url(${SVG.Write(iconColor)});
      `
    case 'Star':
      return css`
        background-image: url(${SVG.Star(iconColor)});
      `
    case 'Save':
      return css`
        background-image: url(${SVG.Save(iconColor)});
      `
    case 'Refresh':
      return css`
        background-image: url(${SVG.Refresh(iconColor)});
      `
    case 'Reset':
      return css`
        background-image: url(${SVG.Reset(iconColor)});
      `
    case 'Delivery':
      return css`
        background-image: url(${SVG.Delivery(iconColor)});
        width: 20px;
        height: 20px;
        background-size: 20px;
      `
    case 'PC':
      return css`
        background-image: url(${SVG.PC(iconColor)});
      `
    case 'Folder':
      return css`
        background-image: url(${SVG.Folder(iconColor)});
      `
    case 'Code':
      return css`
        background-image: url(${SVG.Code(iconColor)});
      `
    case 'Out':
      return css`
        background-image: url(${SVG.Out(iconColor)});
      `
    case 'Link':
      return css`
        background-image: url(${SVG.Link(iconColor)});
      `
    case 'Box':
      return css`
        background-image: url(${SVG.Box(iconColor)});
      `
    case 'Power':
      return css`
        background-image: url(${SVG.Power(iconColor)});
      `
    case 'PasswordShow':
      return css`
        background-image: url(${SVG.PasswordShow(iconColor)});
      `
    case 'PasswordHide':
      return css`
        background-image: url(${SVG.PasswordHide(iconColor)});
      `
  }
}

const ButtonComponent = styled.button<{
  btntype?: ButtonType
  color?: ButtonColor
  btnSize?: ButtonSize
  thin?: boolean
  ellipsis?: boolean
  iconPosition?: 'before' | 'after' | 'center'
  iconName?: ButtonIcon | 'Write'
  disabled?: boolean
  isHover?: boolean
  maxWidth?: string
}>`
  ${BtnCommon};

  ${props => {
    switch (props.btntype) {
      case 'normal':
        return css`
          border-color: ${BtnColor(props.color)?.bg};
          background-color: ${BtnColor(props.color)?.bg};
          color: #fff;

          &:hover,
          &:focus {
            border-color: ${BtnColor(props.color)?.bg}00;
            background-color: ${BtnColor(props.color)?.hover};
          }

          &:disabled,
          &.is-disabled {
            border-color: ${BtnColor(props.color)?.disabled};
            background-color: ${BtnColor(props.color)?.disabled};
          }
        `
      case 'border':
        return css`
          border-color: ${BtnColor(props.color)?.bg};
          background-color: #fff;
          color: ${BtnColor(props.color)?.bg};

          &:hover,
          &:focus {
            border-color: ${BtnColor(props.color)?.hover};
            color: ${BtnColor(props.color)?.hover};
          }

          &:disabled,
          &.is-disabled {
            border-color: ${BtnColor(props.color)?.disabled};
            color: ${BtnColor(props.color)?.disabled};
          }
        `
      case 'ghost':
        return css`
          border: 0;
          background-color: transparent;
          color: ${BtnColor(props.color)?.bg};

          &:hover,
          &:focus {
            border: 0;
            color: ${BtnColor(props.color)?.hover};
          }

          &:disabled,
          &.is-disabled {
            border: 0;
            color: ${BtnColor(props.color)?.disabled};
          }
        `
    }
  }};

  ${props => {
    return useBtnSize(props.btnSize, props.thin, props.ellipsis)
  }}

  ${props => {
    switch (props.iconPosition) {
      case 'after':
        return css`
          &::after {
            ${BtnIconCommon}
            margin-left: 5px;
            ${BtnIcon(props.iconName, props.color, props.btntype, props.disabled, props.isHover)}
          }
        `
      case 'before':
        return css`
          &::before {
            ${BtnIconCommon}
            margin-right: 5px;
            ${BtnIcon(props.iconName, props.color, props.btntype, props.disabled, props.isHover)}
          }
        `
      case 'center':
        return css`
          &::before {
            margin: 5px 0;
            ${BtnIconCommon}
            ${BtnIcon(props.iconName, props.color, props.btntype, props.disabled, props.isHover)};
          }
        `
    }
  }}
`

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  maxWidth?: string
  text?: string
  btntype?: ButtonType
  btnSize?: ButtonSize
  color?: ButtonColor
  thin?: boolean
  ellipsis?: boolean
  iconPosition?: 'before' | 'after' | 'center'
  iconName?: ButtonIcon | 'Write'
  isHover?: boolean
  disabled?: boolean
}

function Button(props: IButtonProps, ref?: React.ForwardedRef<HTMLButtonElement>): JSX.Element {
  // 마우스 hover시 아이콘 컬러도 같이 변경되기 위한 state
  const [hover, setHover] = useState<boolean | undefined>(false)
  const hoverHandler = () => {
    setHover(true)
  }
  const leaveHandler = () => {
    setHover(false)
  }

  const clickHandler = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      ;(document.activeElement as HTMLElement).blur()
      if (props.onClick) props.onClick(e)
      if (e.stopPropagation) {
        e.stopPropagation()
      }
    },
    [props],
  )
  return (
    <ButtonComponent
      btntype={props.btntype ? props.btntype : 'normal'}
      btnSize={props.btnSize ? props.btnSize : 'normal'}
      color={props.color ? props.color : 'dark'}
      thin={props.thin && props.thin}
      ellipsis={props.ellipsis && props.ellipsis}
      iconPosition={props.iconPosition && props.iconPosition}
      iconName={props.iconName && props.iconName}
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHandler}
      onClick={clickHandler}
      isHover={hover}
      disabled={props.disabled && props.disabled}
      ref={ref}
      onMouseUp={props.onMouseUp}
      onMouseDown={props.onMouseDown}
      maxWidth={props.maxWidth}
      className={props.className}
    >
      {props.text}
    </ButtonComponent>
  )
}

export default forwardRef<HTMLButtonElement, IButtonProps>(Button)
