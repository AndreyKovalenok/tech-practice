import { FC } from 'react';
import { Box, Input, InputLabel, FormControl } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

import { CircularButton } from '../../atoms';

type Props = {
  value: string;
  loading?: boolean;
  onCreateClick: () => void;
};

export const TodoInput: FC<Props> = ({ value, loading, onCreateClick }) => {
  return (
    <Box display="flex">
      <FormControl fullWidth>
        <InputLabel htmlFor="add-todo-item">Add an item</InputLabel>
        <Input
          id="add-todo-item"
          value={value}
          disabled={loading}
          endAdornment={
            <CircularButton
              onClick={onCreateClick}
              icon={<AddCircle />}
              loading={loading}
            />
          }
        />
      </FormControl>
    </Box>
  );
};
