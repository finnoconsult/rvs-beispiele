import { Price } from './Price';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Price',
  component: Price,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Price {...args} />;

export const Expensive = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Expensive.args = {
  price: '240,00 €',
};

export const Cheap = Template.bind({});
Cheap.args = {
  price: '32,00 €',
};
