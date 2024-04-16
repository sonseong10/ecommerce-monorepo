import SVG from 'commons/styles/svgIcon'
import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { Text } from 'styles/components'
import Button from './Button'

const InputFileWrap = styled.div<{ isActive: boolean }>`
  /* position: relative; */
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  margin-bottom: 12px;

  > button {
    margin-bottom: 24px;
    width: 100%;
    height: 92px;
    background-color: var(--body-background);
    color: var(--font-primary);
    border: 1px dashed var(--border-dark);

    &:hover,
    &:focus {
      border-color: var(--border-dark);
      background-color: var(--body-background);
      opacity: 0.6;
      transition: opacity 0.2s ease-in-out;
    }
  }

  > div {
    position: relative;
    max-width: 100%;
    /* min-width: 120px; */

    p {
      display: inline-block;
      position: relative;
      display: ${props => (props.isActive ? 'inline-block' : 'none')};
      padding: 6px 34px 6px 24px;
      text-overflow: ellipsis;
      display: block;
      white-space: nowrap;
      overflow: hidden;

      background: url(${SVG.Excel('#515355')}) no-repeat 4px center;
      background-size: 16px;
      background-color: var(--body-background);

      border: 1px solid var(--border-primary);
      border-radius: 4px;
      color: var(--font-grey);
    }
  }
`

const DeleteExcelButton = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 50%;
  right: 2px;
  display: ${props => (props.isActive ? 'inline-block' : 'none')};
  transform: translateY(-50%);
  button {
    margin: 0;
    border: 0;
    width: 32px;
    height: 32px;

    padding: 11px;
  }
`

export interface IInputFileProps {
  id?: string
  filename: string
  accept?: string
  fileChange?: (fileURL: string, fileName: string) => void
  delete?: () => void
  buttonText?: string
  btnType?: string
  type?: string
}

function InputExcel(props: IInputFileProps): JSX.Element {
  const id = props.id === undefined ? 'inputfile' : props.id
  const inputfile = useRef<HTMLInputElement>(null)

  const changeExcelFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const excelFile = e.target.files[0]

      let baseURL = ''

      const reader = new FileReader()

      reader.readAsDataURL(excelFile)
      reader.onload = () => {
        baseURL = reader.result as string

        if (props.fileChange) {
          props.fileChange(baseURL, excelFile.name)
        }
      }
    }
  }

  const deleteItem = () => {
    if (props.delete) {
      props.delete()
    }
  }
  const clickHandler = useCallback(() => {
    if (inputfile.current) {
      inputfile.current.click()
    }
  }, [])
  return (
    <>
      <input
        type="file"
        ref={inputfile}
        id={id}
        accept={props.accept ? props.accept : ''}
        style={{
          visibility: 'hidden',
          width: '1px',
          height: '1px',
          position: 'absolute',
        }}
        onChange={changeExcelFile}
      />
      <InputFileWrap isActive={props.filename !== undefined && props.filename.length > 0}>
        {props.filename !== undefined && props.filename.length > 0 && (
          <div>
            <Text>{props.filename}</Text>
            <DeleteExcelButton isActive={props.filename !== undefined && props.filename.length > 0}>
              <Button
                title="삭제"
                thin
                iconName="Closed"
                iconPosition="center"
                btnType="border"
                color="negative"
                onClick={deleteItem}
              />
            </DeleteExcelButton>
          </div>
        )}

        <Button text={props.buttonText ? props.buttonText : '등록'} onClick={clickHandler} btnSize="xsm" />
      </InputFileWrap>
    </>
  )
}

export default InputExcel
