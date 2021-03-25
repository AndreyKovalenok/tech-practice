import { FC } from 'react';
import { Box, Checkbox, TextField } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import styled from 'styled-components';

import { CircularButton } from '../../atoms';

const StyledTextFiled = styled(TextField)`
  margin: 0 8px 0 4px;
`;

type Props = {
  todoText: string;
  checked: boolean;
  loading?: boolean;
  onRemoveClick: () => void;
  onCheckboxClick: () => null;
};

export const TodoRow: FC<Props> = ({
  todoText,
  checked,
  loading,
  onRemoveClick,
  onCheckboxClick,
}) => {
  return (
    <Box display="flex" alignItems="center" width={1}>
      <Checkbox
        checked={checked}
        size="small"
        disabled={loading}
        onChange={onCheckboxClick}
      />
      <Box mr={1} />
      <StyledTextFiled
        size="small"
        value={todoText}
        disabled={loading}
        fullWidth
      />
      <CircularButton
        onClick={onRemoveClick}
        loading={loading}
        icon={<Cancel />}
      />
    </Box>
  );
};
