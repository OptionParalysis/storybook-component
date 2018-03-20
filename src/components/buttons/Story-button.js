import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';

import Button from './Button';

const buttonEvents = {
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  className: '',
};

storiesOf('Buttons', module)
  .add('Primary Buttons',
    withInfo(
      `
      Buttons are used to initialize an action, either in the background or
      foreground of an experience.
      Primary buttons should be used for the principle call to action
      on the page. Modify the behavior of the button by changing its event properties.
      Small buttons may be used when there is not enough space for a
      regular sized button. This issue is most found in tables. Small button should have three words
      or less.
      The example below shows Primary Button component .
    `, )
      (() => (
        <div>
          <Button {...buttonEvents} className="">
            Primary
        </Button>
          &nbsp;
        <Button {...buttonEvents} kind="link" href="#" className="">
            Link
        </Button>
          &nbsp;
      </div>
    ))
  )
  .add('Basic Buttons',
    withInfo(
      `
        Basic Buttons may be used when the user has a series of options.
      `,
    )(() => (
      <div>
        <Button {...buttonEvents} kind="basic">
          Basic
        </Button>
      </div>
    ))
  )
  .add('Success Buttons',
    withInfo(
      `
      Buttons are used to initialize an action, either in the background or
      foreground of an experience. Success buttons should be used for a completed actions on each page.
      Modify the behavior of the button by changing its property events.
      The example below shows a Success Button component.
    `,
    )(() => (
      <div>
        <Button kind="success" {...buttonEvents} className="">
          Success
        </Button>
      </div>
    ))
  )
  .add('Disabled Buttons',
    withInfo(
      `
      Disabled Buttons may be used when the user cannot proceed until input is collected.
    `,
    )(() => (
      <div>
        <Button {...buttonEvents} disabled>
          Disabled
        </Button>
      </div>
    ))
  )
  .add('Danger Buttons',
    withInfo(
      `
      Buttons are used to initialize an action, either in the background or
      foreground of an experience. Danger buttons should be used for a negative action (such as Delete)
      on the page. Modify the behavior of the button by changing its event properties. The example below
      shows an enabled Danger Button component.
    `,
    )(() => (
      <div>
        <Button kind="danger" {...buttonEvents}>
          Danger
        </Button>
      </div>
    ))
  )
  .add('Set of Buttons',
    withInfo(
      `
      When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart.
    `,
    )(() => (
      <div>
        <Button kind="primary" {...buttonEvents}>
          Primary
        </Button>
        &nbsp;
        <Button {...buttonEvents} kind="basic">
          Basic
        </Button>
        &nbsp;
        <Button kind="success" {...buttonEvents}>
          Success
        </Button>
        &nbsp;
        <Button {...buttonEvents} disabled>
          Disabled
        </Button>
        &nbsp;
        <Button {...buttonEvents} kind="danger">
          Danger
        </Button>
      </div>
    ))
  )

  .add('Set of Small Buttons',
    withInfo(
      `
      Small buttons may be used when there is not enough vertical space for a regular sized button. This issue is most commonly found in tables. Small buttons should have three words or less.
    `,
    )(() => (
      <div>
        <Button {...buttonEvents} className="enc-btn-sm">
          Primary
        </Button>
        &nbsp;
        <Button {...buttonEvents} kind="basic" className="enc-btn-sm">
          Basic
        </Button>
        &nbsp;
        <Button kind="success" {...buttonEvents} className="enc-btn-sm">
          Success
        </Button>
        &nbsp;
        <Button {...buttonEvents} disabled className="enc-btn-sm">
          Disabled
        </Button>
        &nbsp;
        <Button {...buttonEvents} kind="danger" className="enc-btn-sm">
          Danger
        </Button>
      </div>
    ))
  )
  .add('Set of Buttons Uppercased',
    withInfo(
      `
      When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart.
    `,
    )(() => (
      <div>
        <Button kind="primary" {...buttonEvents} className="enc-btn-uppercase">
          Primary
        </Button>
        &nbsp;
        <Button {...buttonEvents} kind="basic" className="enc-btn-uppercase">
          Basic
        </Button>
        &nbsp;
        <Button kind="success" {...buttonEvents} className="enc-btn-uppercase">
          Success
        </Button>
        &nbsp;
        <Button {...buttonEvents} disabled className="enc-btn-uppercase">
          Disabled
        </Button>
        &nbsp;
        <Button {...buttonEvents} kind="danger" className="enc-btn-uppercase">
          Danger
        </Button>
      </div>
    ))
  );