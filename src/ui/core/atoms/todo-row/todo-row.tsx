import React, { FC } from 'react';
import { Box, Checkbox, TextField, IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

type Props = {
  todoText: string;
  checked: boolean;
  disabled?: boolean;
};

export const TodoRow: FC<Props> = ({ todoText, checked, disabled }) => {
  return (
    <Box display="flex" alignItems="center">
      <Checkbox checked={checked} />
      <TextField size="small" value={todoText} disabled={disabled} />
      <IconButton size="small">
        <Cancel />
      </IconButton>
    </Box>
  );
};
