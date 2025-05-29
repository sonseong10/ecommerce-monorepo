import Button from 'src/components/ui/atom/Button';
import {ElementGroup} from 'src/styles/components';
import styled from 'styled-components';

const MoblieSellingWrap = styled(ElementGroup.Row)`
  position: sticky;
  left: 0;
  bottom: 0;
  padding: 6px;
  width: 100%;
  height: 56px;
  background-color: #fff;
  z-index: 100;

  button {
    &:nth-child(1) {
      flex: 1;
      flex-direction: column;
      padding: 0;
      font-size: 13px;
      line-height: 1.9;

      &::before {
        margin: 0;
        width: 20px;
        height: 20px;
      }
    }
    &:nth-child(2) {
      flex: 9;
      height: 100%;
    }
  }
`;

const bookmarkCount = 2024;

function SellingBox() {
  return (
    <>
      {/* <aside style={{display: 'inline-block'}}>
            <div>
              <section>
                <UiSelectBox id="1" data={['dsadsadsa', 'dsadsa']} />
                <UiSelectBox id="1" data={['dsadsadsa', 'dsadsa']} />
                <UiSelectBox id="1" data={['dsadsadsa', 'dsadsa']} />
              </section>

              <div>
                <span>주문금액</span>
                <strong>0원</strong>
              </div>

              <div>
                <Button
                  text=""
                  $btnSize="lg"
                  thin={true}
                  $btnType="border"
                  $iconname="BookMark"
                  $iconposition="center"
                />
                <Button text="장바구니" $btnType="border" $btnSize="lg" thin={true} color="primary" />
                <Button text="바로구매" $btnSize="lg" thin={true} color="primary" />
              </div>
            </div>
          </aside> */}

      <MoblieSellingWrap>
        <Button
          $iconname="BookMark"
          $iconposition="center"
          text={bookmarkCount.toLocaleString()}
          $btnType="ghost"
        ></Button>

        <Button text="구매하기" color="primary" />
      </MoblieSellingWrap>
    </>
  );
}

export default SellingBox;
