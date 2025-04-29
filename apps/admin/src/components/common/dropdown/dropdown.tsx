import { memo } from 'react'

interface IDropDownProps {
  listItems: { id: number; value: string }[]
  handleEvent: (v: string) => void
  dark: boolean
}

const DropDown = ({ listItems, handleEvent }: IDropDownProps) => {
  const onValueChange = (id: number) => {
    handleEvent(listItems.find(i => i.id === id)!.value)
  }

  return (
    <ul>
      {listItems.map(item => {
        return (
          <li key={item.id}>
            <button onClick={onValueChange.bind(null, item.id)} type="button">
              {item.value}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default memo(DropDown)
