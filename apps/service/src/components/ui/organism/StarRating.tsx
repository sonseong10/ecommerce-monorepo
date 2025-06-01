import {commonSVG} from '@ecommerce/commons';
import {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';

const StarRatingWrapper = styled.div`
  display: flex;

  & > * {
    margin-left: 5px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const IconStyle = css<{size?: number}>`
  width: ${(props) => (props.size ? props.size : '22')}px;
  height: ${(props) => (props.size ? props.size : '22')}px;
  background-size: ${(props) => (props.size ? props.size : '22')}px;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: 0;
`;

export const Star = styled.button<{size?: number}>`
  ${IconStyle}
  background-image: url(${commonSVG.Star('0aa5ff')});

  &.is-empty {
    background-image: url(${commonSVG.Star('a8a8a8')});
  }
`;

function StarViewer(props: IStarPointProps): JSX.Element {
  const score = props.score ? props.score : 0;
  return (
    <>
      {Array.from({length: 5}, (_, i) => (
        <Star size={props.$size} as={'i'} key={i} className={i + 1 > score ? 'is-empty' : ''} />
      ))}
    </>
  );
}

function StarEditor(props: IStarPointProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState<number[]>([]);

  const changeRating = (val: number) => {
    setRating(val);

    props.change?.(val);
  };

  useEffect(() => {
    if (props.score) {
      setRating(props.score);
    }
  }, [props.score]);

  useEffect(() => {
    if (props.count) {
      const temp = [];
      for (let index = 0; index < props.count; index++) {
        temp.push(index + 1);
      }
      setCount(temp);
    }
  }, [props.count]);

  return (
    <>
      {props.count
        ? count.map((score) => (
            <Star
              key={score}
              size={props.$size}
              className={score >= rating + 1 ? 'is-empty' : ''}
              onClick={() => changeRating(score)}
              disabled={props.disabled}
            />
          ))
        : [1, 2, 3, 4, 5].map((score) => (
            <Star
              key={score}
              size={props.$size}
              className={score >= rating + 1 ? 'is-empty' : ''}
              onClick={() => changeRating(score)}
            />
          ))}
    </>
  );
}

function StarToggle(props: IStarPointProps): JSX.Element {
  const [active, setActive] = useState(0);

  const changeRating = (val: number) => {
    setActive(val === 0 ? 1 : 0);
    props.change?.(props.state !== 1 ? 1 : 0);
  };

  return (
    <Star
      size={props.$size}
      onClick={(e) => {
        e.stopPropagation();
        changeRating(active);
      }}
      disabled={props.disabled}
      className={props.state !== 1 ? 'is-empty' : ''}
    />
  );
}

interface IStarPointProps {
  mode?: 'viewer' | 'editor' | 'toggle';
  score?: number;
  $size?: number;
  count?: number;
  change?: (value: number) => void;
  state?: number;
  disabled?: boolean;
}

/**
 * 별
 * @param mode 컴포넌트 사용 타입: viewer - 리뷰 별점 표시 모드, editor - 별점 작성 모드 (default: "viewer")
 * @param score 평균 리뷰 점수
 * @param size 아이콘 사이즈 (default: 22px)
 * @param change editor 모드에서 리뷰 평점값 가져가기
 */
function StarRating(props: IStarPointProps): JSX.Element {
  const mode = props.mode !== undefined ? props.mode : 'viewer';

  return (
    <StarRatingWrapper className="review-rating">
      {mode === 'viewer' ? (
        <StarViewer score={props.score} $size={props.$size} />
      ) : mode === 'editor' ? (
        <StarEditor
          score={props.score}
          $size={props.$size}
          count={props.count}
          change={props.change}
          disabled={props.disabled}
        />
      ) : (
        <StarToggle
          score={props.score}
          $size={props.$size}
          count={props.count}
          change={props.change}
          disabled={props.disabled}
          state={props.state}
        />
      )}
    </StarRatingWrapper>
  );
}

export default StarRating;
