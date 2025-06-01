import {ElementGroup, Title} from 'src/styles/components';
import Button from '../atom/Button';
import styled from 'styled-components';

interface ISectionTitleProps {
  text: string;
  subText?: string;
  dropDown?: {state: boolean; change: () => void};
  button?: JSX.Element;
}

const Container = styled(ElementGroup.Row)`
  margin: 10px 0;
  h2 {
    font-size: 17px;
    font-weight: 700;
    color: #000;
    line-height: 23px;

    > span {
      color: var(--primary);
      margin-left: 4px;
    }
  }

  button {
    font-weight: 700;
    font-size: 14px;
  }
`;

function SectionTitle({text, subText, dropDown, button}: ISectionTitleProps) {
  return (
    <Container $flexContent="between">
      <Title as={'h2'}>
        {text}
        {subText ? <span>{subText}</span> : null}
      </Title>

      {dropDown ? (
        !dropDown.state ? (
          <Button $iconname="DownArrow" onClick={dropDown.change} $iconposition="center" $btnType="ghost" />
        ) : null
      ) : null}
      {button ? button : null}
    </Container>
  );
}

export default SectionTitle;
