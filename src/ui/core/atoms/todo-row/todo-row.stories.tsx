import { Meta } from '@storybook/react/types-6-0';

import { TodoRow } from '.';

const story: Meta = {
  title: 'ui/atoms/TodoRow',
  component: TodoRow,
  args: {
    todoText: 'Todo something...',
    checked: false,
  },
};

export default story;

export const Default = TodoRow;
