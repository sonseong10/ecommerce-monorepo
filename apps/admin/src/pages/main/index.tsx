import { ElementGroup, Title } from '../../styles/components'
import { useWorkCount } from './store/mainHook'
import styled from 'styled-components'
import Button from '../../components/ui/Button'

const CardStyle = styled.div`
  width: calc(100% / 3);
  height: 120px;
  padding: 1.2em;
  box-shadow: 3px 4px 6px #dddddd3c;
  border-radius: 1em;
  position: relative;
  border: 1px solid #f4f6f8;

  span {
    font-size: 14px;
    font-weight: 500;
  }

  strong {
    position: absolute;
    right: 14px;
    bottom: 14px;
    font-weight: 700;
    font-size: 2rem;
  }
`

function Card() {
  const count = useWorkCount()

  return (
    <>
      {count.map((item, index) => (
        <CardStyle key={index}>
          <span>{item.text}</span>
          <strong>{item.value.toLocaleString()}건</strong>
        </CardStyle>
      ))}
    </>
  )
}

const HomePage = () => {
  return (
    <>
      <ElementGroup.Row flexContent="between">
        <Title size="md" weight="medium">
          내업무 현황
        </Title>

        <Button text="더보기" btntype="ghost" iconName="NextArrow" iconPosition="after" btnSize="xsm" />
      </ElementGroup.Row>

      <ElementGroup.Row>
        <Card />
      </ElementGroup.Row>
    </>
  )
}

export default HomePage
