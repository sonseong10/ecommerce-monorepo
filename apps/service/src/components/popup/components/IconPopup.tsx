import {AbsPopup} from '@ecommerce/commons';
import {useClosePopup, usePopupData} from '@ecommerce/commons';
import {ButtonState} from '@ecommerce/commons';
import {commonSVG} from '@ecommerce/commons';
import type {ButtonIcon} from '@ecommerce/commons';
import {ElementGroup, Text, Title} from '../../../styles/components';
import {styled} from '../../../styles/theme';
import {PopupType} from '../PopupType';
import Button from '../../ui/atom/Button';

export type IconPopupProps = {
  iconType: ButtonIcon;
  iconColor: string;
  title?: string;
  desc?: string;
};

const ButtonGroupWrapper = styled(ElementGroup.Row)`
  width: 100%;
  justify-content: center;
  padding: 6px;

  button {
    flex: 1;
    margin: 0;
    font-weight: 400;
  }
`;

export function DeletePopupButtonGroup(): JSX.Element {
  const {close} = useClosePopup(PopupType.ICON);
  return (
    <ButtonGroupWrapper>
      <Button text="취소" $btnType="ghost" color="gray" btnsize="md" onClick={() => close(ButtonState.NO)} />
      <Button text="삭제하기" $btnType="ghost" color="negative" btnsize="md" onClick={() => close(ButtonState.OK)} />
    </ButtonGroupWrapper>
  );
}

export function ConfirmPopupButtonGroup(): JSX.Element {
  const {close} = useClosePopup(PopupType.ICON);
  return (
    <ButtonGroupWrapper>
      <Button text="취소" $btnType="ghost" color="gray" btnsize="md" onClick={() => close(ButtonState.NO)} />
      <Button text="확인" $btnType="ghost" color="dark" btnsize="md" onClick={() => close(ButtonState.OK)} />
    </ButtonGroupWrapper>
  );
}

export function AlertPopupButtonGroup(): JSX.Element {
  const {close} = useClosePopup(PopupType.ICON);
  return (
    <ButtonGroupWrapper>
      <Button text="확인" $btnType="ghost" color="dark" btnsize="md" onClick={() => close(ButtonState.OK)} />
    </ButtonGroupWrapper>
  );
}

export function ConfrimPopupButtonGroup(): JSX.Element {
  const {close} = useClosePopup(PopupType.ICON);
  return (
    <ButtonGroupWrapper>
      <Button text="취소" $btnType="ghost" btnsize="md" onClick={() => close(ButtonState.NO)} />
      <Button text="삭제하기" $btnType="ghost" color="negative" btnsize="md" onClick={() => close(ButtonState.OK)} />
    </ButtonGroupWrapper>
  );
}

const Icon = styled.div<{name?: string; color?: string}>`
  margin-bottom: 18px;
  width: 100px;
  height: 100px;
  //
  background-size: 68%;
  border: 4px solid ${(props: {color?: string}) => (props?.color ? props.color : '#000')};
  border-radius: 50px;
`;

function IconPopup(): JSX.Element {
  const {popupDo} = usePopupData<IconPopupProps>(PopupType.ICON);
  return (
    <AbsPopup type={PopupType.ICON} borderShape={4}>
      <ElementGroup.Col flexcontent="center">
        <Icon name={popupDo.data?.iconType} color={popupDo.data?.iconColor} />
        {popupDo.data?.title && (
          <Title align="center" size="sm">
            {popupDo.data.title
              .replace(/<br(.*?)\/>/gims, `<br/>`)
              .split('<br/>')
              .map((line, idx) => {
                return (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                );
              })}
          </Title>
        )}
        {popupDo.data?.desc && (
          <Text align="center" color="description">
            {popupDo.data.desc
              .replace(/<br(.*?)\/>/gims, `<br/>`)
              .split('<br/>')
              .map((line, idx) => {
                return (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                );
              })}
          </Text>
        )}
      </ElementGroup.Col>
    </AbsPopup>
  );
}

export default IconPopup;
