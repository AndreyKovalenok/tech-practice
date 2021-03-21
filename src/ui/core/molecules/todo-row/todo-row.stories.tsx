import { Meta } from '@storybook/react/types-6-0';

import { TodoRow } from './todo-row';

const story: Meta = {
  title: 'ui/molecules/TodoRow',
  component: TodoRow,
  argTypes: {
    onRemoveClick: {
      action: 'onRemoveClick action!',
    },
    onCheckboxClick: {
      action: 'onCheckboxClick action!',
    },
  },
  args: {
    todoText: 'Todo something...',
    checked: false,
    loading: false,
  },
};

export default story;

export const Default = TodoRow;
