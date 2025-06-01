import {useState} from 'react';
import Button from 'src/components/ui/atom/Button';
import SectionTitle from 'src/components/ui/organism/SectionTitle';
import {ElementGroup} from 'src/styles/components';
import styled from 'styled-components';

const InquiryItemWrap = styled.li`
  margin-bottom: 40px;
`;

const InquiryType = styled(ElementGroup.Row)`
  position: relative;
  margin: 0 0 8px;
  font-size: 12px;
  line-height: 16px;
  color: #424242;

  > span {
    display: flex;
    align-items: center;
    margin: 0;

    &:not(:last-child)::after {
      display: inline-block;
      width: 1px;
      height: 12px;
      margin: 0 4px;
      background-color: #727272;
      content: '';
    }

    &.answered {
      color: var(--primary);
    }
  }
`;

const InquiryInfo = styled(ElementGroup.Row)`
  margin: 0 0 9px;
  font-size: 12px;
  line-height: 16px;
  color: #bdbdbd;
`;

const InquiryContent = styled.div`
  position: relative;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 20px;
  color: #424242;

  span[aria-hidden] {
    color: var(--primary);
  }
`;

const AnswerTarget = styled(ElementGroup.Row)`
  strong {
    font-weight: 700;
  }

  strong,
  time {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

function InquiryItem() {
  return (
    <InquiryItemWrap>
      <header>
        <InquiryType>
          <span>비구매</span>
          <span>상품</span>
          <span className="answered">답변완료</span>
        </InquiryType>
        <InquiryInfo>
          <span>가**</span>
          <time dateTime="YYYY-MM-DD">2025년 05월 25일</time>
        </InquiryInfo>
      </header>
      <InquiryContent>
        <ElementGroup.Row $flexAlign="start">
          <span aria-hidden>Q</span>
          <p>상품 쿠폰이 어디 있나요?</p>
        </ElementGroup.Row>
        <ElementGroup.Row $flexAlign="start">
          <span aria-hidden>A</span>
          <ElementGroup.Col $flexAlign="start">
            <AnswerTarget>
              <strong>레나에너지</strong>
              <time dateTime="YYYY-MM-DD">2025년 05월 27일</time>
            </AnswerTarget>
            <p>
              안녕하세요 고객님!
              <br /> 이용에 불편을 드려 죄송합니다.
              <br /> 4/8 하루 행사로 현재 종료된 것으로 확인됩니다.
              <br /> 감사합니다 ^^
            </p>
          </ElementGroup.Col>
        </ElementGroup.Row>
      </InquiryContent>
    </InquiryItemWrap>
  );
}

function Inquiry() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const open = () => {
    setIsShow(true);
  };
  return (
    <>
      <SectionTitle
        text="문의"
        subText="86"
        dropDown={{state: isShow, change: open}}
        button={!isShow ? <></> : <Button color="primary" $btnType="ghost" text="문의하기" />}
      />

      {!isShow ? (
        <></>
      ) : (
        <ul>
          <InquiryItem />
          <InquiryItem />
          <InquiryItem />
          <InquiryItem />
        </ul>
      )}
    </>
  );
}

export default Inquiry;
