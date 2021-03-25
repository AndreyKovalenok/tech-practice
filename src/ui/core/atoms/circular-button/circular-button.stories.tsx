import { Meta } from '@storybook/react/types-6-0';
import { AddCircle } from '@material-ui/icons';

import { CircularButton } from './circular-button';

const story: Meta = {
  title: 'ui/atoms/CircularButton',
  component: CircularButton,
  args: {
    loading: false,
  },
};

export default story;

export const Default = (props: any) => (
  <CircularButton {...props} icon={<AddCircle />} />
);
