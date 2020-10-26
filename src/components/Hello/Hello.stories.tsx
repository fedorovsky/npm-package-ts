import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Hello from './Hello';

export default {
  title: 'Components/Hello',
};

export const Primary = () => <Hello message="Hello" onClick={action('clicked')}/>;
