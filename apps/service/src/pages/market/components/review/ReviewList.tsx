import Button from 'src/components/ui/atom/Button';
import StarRating from 'src/components/ui/organism/StarRating';
import {ElementGroup} from 'src/styles/components';
import styled from 'styled-components';

const ReviewItemWrap = styled.li`
  border-bottom: 1px solid #ededed;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const ReviewHeader = styled.header`
  display: flex;
  align-items: flex-start;

  div > img {
    display: block;
    margin-right: 8px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
  }

  span {
    font-size: 12px;

    &.date {
      color: #727272;
    }
  }
`;

const ReviewContent = styled.div`
  p {
    margin: 10px 0 16px;

    font-size: 14px;
    line-height: 21px;
    letter-spacing: normal;
    color: #424242;
    white-space: pre-line;

    &.review-product {
      display: flex;
      &::before {
        display: inline-block;
        margin-right: 8px;
        width: 2px;
        height: 16px;
        background-color: #ededed;
        content: '';
      }

      margin: 24px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 12px;
      line-height: 18px;
      color: #727272;
      word-break: keep-all;
    }
  }
`;

const ReviewFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  button {
    padding: 0 10px;
    font-size: 12px;
  }
`;

function ReviewItem() {
  return (
    <ReviewItemWrap>
      <ReviewHeader>
        <div>
          <img src="https://picsum.photos/50/50" />
        </div>
        <div>
          <span>가나다</span>
          <ElementGroup.Row>
            <StarRating score={4.8} $size={14} />
            <span className="date">
              <time dateTime="YYYY-MM-DD">2025.05.27</time> ∙ 내일의집 구매
            </span>
          </ElementGroup.Row>
        </div>
      </ReviewHeader>
      <ReviewContent>
        <p className="review-product">키노 LED 미니 머쉬룸 무선 조명 ∙ 노랑색</p>
        <p>조명이 밝아서 하나로 충분해요</p>
      </ReviewContent>
      <ReviewFooter>
        <Button
          text="도움돼요"
          $iconname="Check"
          $iconposition="before"
          $btnSize="xs"
          $btnType="border"
          $thin={true}
          $ellipsis={true}
        />
      </ReviewFooter>
    </ReviewItemWrap>
  );
}

function ReviewList() {
  return (
    <>
      <ul>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </ul>
    </>
  );
}

export default ReviewList;
