import { Price } from './Price';

export default {
  title: 'Price',
};

export const PriceStory = () => (
  <>
    <Price price="123,45 €" />
    <Price price="23,45 €" />
    <Price price="1123,45 €" />
  </>
);
