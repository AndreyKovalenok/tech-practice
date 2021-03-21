import React, { FC } from 'react';
import { Box } from '@material-ui/core';

type Props = {
  title: string;
};

export const TodoRow: FC<Props> = ({ title }) => {
  return <Box>{title}</Box>;
};
