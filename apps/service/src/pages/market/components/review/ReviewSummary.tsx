import StarRating from 'src/components/ui/organism/StarRating';
import {ElementGroup} from 'src/styles/components';
import styled from 'styled-components';

const Container = styled(ElementGroup.Row)`
  display: flex;
  align-items: center;
  padding: 24px 0;
  width: 100%;
  background-color: #f7f8fa;
  border-radius: 8px;
  text-align: center;
  margin: 16px 0 24px;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  > strong {
    display: block;
    color: #292929;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    line-height: normal;
  }
`;

const AverageReview = styled.div`
  flex: 1;
  padding: 0 20px;
  border-left: 1px solid #ededed;
  ol {
    li {
      display: flex;
      align-items: center;
      color: #9e9e9e;
      font-size: 12px;
      font-weight: 400;
      padding-top: 4px;

      > .progress-bar {
        margin: 0 4px;
        width: 87px;
        height: 6px;
        border-radius: 3px;
        background-color: #ededed;

        > span {
          display: block;
          height: 6px;
          background-color: var(--primary);
          border-radius: 3px;
        }
      }
    }
  }
`;

/**
 * ReviewSummary
 * 리뷰 종합정보
 * @returns JSX.Element
 */
function ReviewSummary(): JSX.Element {
  return (
    <Container>
      <Summary>
        <strong>4.9</strong>
        <StarRating count={3.9} $size={'md'}></StarRating>
      </Summary>
      <AverageReview>
        <ol>
          <li>
            <span>5점</span>
            <div className="progress-bar">
              <span style={{width: '20%'}}></span>
            </div>
            <span>20</span>
          </li>
          <li>
            <span>4점</span>
            <div className="progress-bar">
              <span style={{width: '18%'}}></span>
            </div>
            <span>18</span>
          </li>
          <li>
            <span>3점</span>
            <div className="progress-bar">
              <span style={{width: '2%'}}></span>
            </div>
            <span>2</span>
          </li>
          <li>
            <span>2점</span>
            <div className="progress-bar">
              <span style={{width: '9%'}}></span>
            </div>
            <span>9</span>
          </li>
          <li>
            <span>1점</span>
            <div className="progress-bar">
              <span style={{width: '0%'}}></span>
            </div>
            <span>0</span>
          </li>
        </ol>
      </AverageReview>
    </Container>
  );
}

export default ReviewSummary;
