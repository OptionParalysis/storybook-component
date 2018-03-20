import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button } from '../components/buttons/Story-button';
import { Accordion } from '../components/accordion/Story-accordion';
import { Icon } from '../components/icon/Story-icon';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);