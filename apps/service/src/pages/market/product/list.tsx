import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Text} from '../../../styles/components';
import {commonSVG} from '@ecommerce/commons';

interface IProductListProps {
  products?: Array<{
    code: string;
    imageURL: string;
    price: number;
    discount?: number;
    supplierName: string;
    reviewCount?: number;
    name: string;
    grade: number;
  }>;
}

const ProductCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 12px -10px 0;
  padding: 0 16px;

  li {
    padding: 0 10px 30px 10px;
    width: calc((100% / 2));

    a {
      .production-item-image {
        overflow: hidden;
        border-radius: 4px;

        img {
          display: block;
          width: 100%;
          object-fit: cover;
          transition: all 0.2s linear;
        }
      }

      .product-item_content {
        margin-top: 9px;
        p {
          display: block;
          color: #757575;
          word-break: break-all;
          font-size: 11px;
          font-weight: 400;
          line-height: 13px;
        }
      }

      .product-item_title {
        font-size: 1rem;
        max-height: 34px;
        margin-top: 5px;
        word-break: break-all;
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
        color: rgb(0, 0, 0);
        transition: opacity 0.1s ease 0s;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow-wrap: break-word;
      }

      .product-item-price {
        margin-top: 2px;
        font-size: 17px;
        line-height: 23px;
        font-weight: 700;
        em {
          color: #35c5f0;
          margin-right: 4px;
        }
      }

      .product-item-review {
        display: flex;
        align-items: center;
        margin-top: 3px;
        font-size: 12px;
        color: #9e9e9e;
        line-height: 16px;
        font-weight: 500;

        > div {
          display: flex;
          align-items: center;
          margin-right: 2px;

          i {
            display: inline-block;
            margin-right: 2px;
            width: 12px;
            height: 12px;
            background: url(${commonSVG.Star('#35C5F0')}) no-repeat center center;
          }

          strong {
            font-size: 12px;
            color: #424244;
          }
        }
      }
    }

    &:hover {
      h4 {
        opacity: 0.5;
      }

      img {
        transform: scale(1.2);
      }
    }

    @media screen and (min-width: 768px) {
      width: calc(100% / 4);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1256px) {
    padding: 0;
  }
`;

export function ProductList({products}: IProductListProps) {
  return (
    <ProductCardList>
      {products?.map((product) => (
        <li key={product.code}>
          <Link to={`/productions/${product.code}`}>
            <div className="production-item-image">
              <img src={product.imageURL} alt={product.name} />
            </div>
            <div className="product-item_content">
              <Text size="sm">{product.supplierName}</Text>
              <h4 className="product-item_title">{product.name}</h4>
              <div className="product-item-price">
                {product.discount ? <em>{product.discount}%</em> : <></>}
                <strong>{product.price.toLocaleString()}</strong>
              </div>
              <div className="product-item-review">
                <div>
                  <i></i>
                  <strong>{product.grade}</strong>
                </div>
                <span>리뷰 {product.reviewCount?.toLocaleString()}</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ProductCardList>
  );
}
