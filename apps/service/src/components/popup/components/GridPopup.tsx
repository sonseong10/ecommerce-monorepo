import {AbsPopup} from '@ecommerce/commons';
import {usePopupData} from '@ecommerce/commons';
import {Grid} from '@ecommerce/commons';
import {PopupType} from '../PopupType';
import {Text} from 'src/styles/components';
import type {Color} from 'src/styles/stylesVo';

const GridPopup = (): JSX.Element => {
  const {popupDo} = usePopupData<{
    setting: [];
    data: unknown[];
    footerMsg?: {text: string; color?: Color};
  }>(PopupType.GRID);

  return (
    <AbsPopup type={PopupType.GRID}>
      {popupDo?.data &&
        popupDo.data?.data.length > 0 &&
        Grid({
          setting: popupDo.data.setting,
          data: popupDo.data.data,
          headerInfo: {fixed: 300},
        })}
      {popupDo.data?.footerMsg && <Text color={popupDo.data?.footerMsg.color}>{popupDo.data?.footerMsg.text}</Text>}
    </AbsPopup>
  );
};

export default GridPopup;
