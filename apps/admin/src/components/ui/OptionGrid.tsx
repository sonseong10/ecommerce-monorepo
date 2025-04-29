import { TableContainer } from 'styles/components'

export interface OptionCellData {
  title: string
  visible?: boolean
  element?: JSX.Element
}
export interface IOptionGridProps {
  className?: string
  data: Array<OptionCellData>
}

function OptionGrid(props: IOptionGridProps): JSX.Element {
  return (
    <TableContainer direction="row" className={props.className}>
      <table>
        <caption></caption>
        <colgroup>
          <col style={{ width: '125px' }} />
          <col style={{ width: 'auto' }} />
        </colgroup>
        <tbody>
          {props.data
            .filter(item => (item.visible === undefined ? true : item.visible))
            .map((item, idx) => (
              <tr key={idx}>
                <th scope="row">{item.title}</th>
                <td>{item.element}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableContainer>
  )
}
export default OptionGrid
