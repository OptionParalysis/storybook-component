import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import Icon from './Icon';

const props = {
  style: {
    margin: '50px',
  },
  description: 'This is a description of the icon and what it does in context',
  className: 'fa',
};

storiesOf('Icon', module)
  .add('Icon',
    withInfo(
      `
      Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop.
    `, )
      (() => (
        <div>
          <Icon name="fa-plus" {...props} />
          <Icon name="fa-facebook" {...props} />
          <Icon name="fa-user-circle" {...props} />
        </div>
      ))
  );