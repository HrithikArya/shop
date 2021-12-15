import React from 'react';

import Shop from './Shop';

export default {
  title: 'Components/Shop',
  component: Shop,
};

const Template = (args) => <Shop {...args} />;

export const StandardShop = Template.bind({});
StandardShop.args = {
  user: {},
};