import { FC } from 'react';
import { IconButton, CircularProgress } from '@material-ui/core';
import type { IconButtonProps } from '@material-ui/core';

type Props = {
  icon: JSX.Element;
  loading?: boolean;
} & IconButtonProps;

export const CircularButton: FC<Props> = ({ icon, loading, ...rest }) => {
  return (
    <IconButton {...rest} size="small" disabled={loading}>
      {loading ? <CircularProgress size={24} /> : icon}
    </IconButton>
  );
};
