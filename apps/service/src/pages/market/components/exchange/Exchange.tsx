import {useState} from 'react';
import SectionTitle from 'src/components/ui/organism/SectionTitle';
import styled from 'styled-components';

const Container = styled.div`
  overflow: auto;
  width: 100%;
  max-width: 1156px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 10px;
`;

const ProductionSellingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 12px;
  margin: 28px 0;

  tr {
    border: none;
    border-bottom: 1px solid #ededed;

    th {
      width: 18ch;
      color: #757575;
      vertical-align: middle;
    }

    td {
      color: #424242;
      white-space: pre-line;
      word-break: break-all;
    }

    th,
    td {
      padding: 12px 6px;
      text-align: left;
      line-height: 1.38;
    }
  }
`;

const ExchangeGuide = styled.div`
  margin-bottom: 24px;

  h2 {
    margin: 30px 0 5px;
    color: #424242;
    font-size: 15px;
    font-weight: 700;
    line-height: 21px;
  }

  p {
    margin-bottom: 10px;
    color: #757575;
    font-size: 12px;
    line-height: 16px;
  }

  ol {
    counter-reset: index;
    color: #424242;
    font-size: 12px;
    line-height: 16px;
    list-style: auto;
    padding: 0 18px;

    small {
      font-size: 10px;
      color: #757575;
    }
  }
`;

function Exchage() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const open = () => {
    setIsShow(true);
  };

  return (
    <>
      {isShow ? (
        <>
          <Container>
            <SectionTitle text="배송" />

            <ProductionSellingTable>
              <tbody>
                <tr>
                  <th>배송</th>
                  <td>일반택배</td>
                </tr>
                <tr>
                  <th>배송비</th>
                  <td>무료배송</td>
                </tr>
                <tr>
                  <th>도서산간 추가 배송비</th>
                  <td>3,000원 </td>
                </tr>
                <tr>
                  <th>배송불가 지역</th>
                  <td>배송불가 지역이 없습니다.</td>
                </tr>
              </tbody>
            </ProductionSellingTable>
          </Container>

          <Container>
            <SectionTitle text="교환/환불" />

            <ProductionSellingTable>
              <tbody>
                <tr>
                  <th>반품배송비</th>
                  <td>3,500원 (최초 배송비가 무료인 경우 7,000원 부과)</td>
                </tr>
                <tr>
                  <th>교환배송비</th>
                  <td>7,000원</td>
                </tr>
                <tr>
                  <th>보내실 곳</th>
                  <td>(41752) 대구 서구 와룡로 477 (이현동) (주)지앤티클린 이현지점</td>
                </tr>
              </tbody>
            </ProductionSellingTable>

            <ExchangeGuide>
              <h2>반품/교환 사유에 따른 요청 가능 기간</h2>
              <p>
                반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소 등을 협의하신 후 반품상품을
                발송해 주시기 바랍니다.
              </p>

              <ol>
                <li>
                  구매자 단순 변심은 상품 수령 후 7일 이내<small>(구매자 반품배송비 부담)</small>
                </li>
                <li>
                  표시/광고와 상이, 계약내용과 다르게 이행된 경우 상품 수령 후 3개월 이내, 그 사실을 안 날 또는 알 수
                  있었던 날로부터 30일 이내.
                  <br />둘 중 하나 경과 시 반품/교환 불가<small>(판매자 반품배송비 부담)</small>
                </li>
              </ol>

              <h2>반품/교환 불가능 사유</h2>

              <p>아래와 같은 경우 반품/교환이 불가능합니다.</p>

              <ol>
                <li>반품요청기간이 지난 경우</li>
                <li>
                  구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우
                  <small>(단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)</small>
                </li>
                <li>
                  포장을 개봉하였으나 포장이 훼손되어 상품가치가 현저히 상실된 경우<small>(예: 식품, 화장품)</small>
                </li>
                <li>
                  구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우
                  <small>(라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우)</small>
                </li>
                <li>
                  시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우
                  <small>(예: 식품, 화장품)</small>
                </li>
                <li>고객주문 확인 후 상품제작에 들어가는 주문제작상품</li>
                <li>
                  복제가 가능한 상품 등의 포장을 훼손한 경우<small>(CD/DVD/GAME/도서의 경우 포장 개봉 시)</small>
                </li>
              </ol>
            </ExchangeGuide>
          </Container>

          <Container>
            <SectionTitle text="판매자 정보" />

            <ProductionSellingTable>
              <tbody>
                <tr>
                  <th>상호</th>
                  <td>상세페이지 참고</td>
                </tr>
                <tr>
                  <th>대표자</th>
                  <td>상세페이지 참고</td>
                </tr>
                <tr>
                  <th>사업장소재지</th>
                  <td>상세페이지 참고</td>
                </tr>
                <tr>
                  <th>고객센터 전화번호</th>
                  <td>상세페이지 참고</td>
                </tr>
                <tr>
                  <th>E-mail</th>
                  <td>상세페이지 참고</td>
                </tr>
                <tr>
                  <th>사업자 등록번호</th>
                  <td>상세페이지 참고</td>
                </tr>
                <tr>
                  <th>통신판매업 신고번호</th>
                  <td>상세페이지 참고</td>
                </tr>
              </tbody>
            </ProductionSellingTable>
          </Container>
        </>
      ) : (
        <Container>
          <SectionTitle text="배송/교환/환불" dropDown={{state: isShow, change: open}} />
        </Container>
      )}
    </>
  );
}

export default Exchage;
