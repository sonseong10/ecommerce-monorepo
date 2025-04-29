import { Text } from 'styles/components'

function GridEmpty(props: { text: string }) {
  return (
    <Text align="center" color="disabled">
      {props.text}
    </Text>
  )
}

export default GridEmpty
