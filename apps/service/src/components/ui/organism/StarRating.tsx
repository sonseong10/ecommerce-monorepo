import SVG from '@ecommerce/commons/styles/svgIcon';
import styled from 'styled-components';

const Star = styled.i<{$isActive: boolean; $size: 'sm' | 'md' | 'lg'}>`
  display: inline-block;
  width: ${(props) => (props.$size === 'lg' ? '48px' : props.$size === 'md' ? '20px' : '14px')};
  height: ${(props) => (props.$size === 'lg' ? '48px' : props.$size === 'md' ? '20px' : '14px')};
  background: ${(props) => (props.$isActive ? `url(${SVG.Star('#35C5F0')})` : `url(${SVG.Star('#ddd')})`)} no-repeat
    center center;
  background-size: ${(props) => (props.$size === 'lg' ? '32px' : props.$size === 'md' ? '16px' : '14px')};
`;

function StarRating({count, $size}: {count: number; $size: 'sm' | 'md' | 'lg'}) {
  const renderRating = () => {
    const components = [];
    const rate = Math.round(count);

    for (let index = 0; index < 5; index++) {
      if (index < rate) {
        components.push(<Star $isActive={true} $size={$size}></Star>);
      } else {
        components.push(<Star $isActive={false} $size={$size}></Star>);
      }
    }
    return components;
  };

  return <span aria-label={`리뷰 ${count}점`}>{renderRating()}</span>;
}

export default StarRating;
