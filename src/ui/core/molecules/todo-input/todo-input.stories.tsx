import { Meta } from '@storybook/react/types-6-0';

import { TodoInput } from './todo-input';

const story: Meta = {
  title: 'ui/molecules/TodoInput',
  component: TodoInput,
  argTypes: {
    onCreateClick: {
      action: 'onCreateClick action!',
    },
  },
  args: {
    loading: false,
  },
};

export default story;

export const Default = TodoInput;
