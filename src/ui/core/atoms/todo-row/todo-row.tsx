import { FC } from 'react';
import { Box, Checkbox, TextField, IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import styled from 'styled-components';

const StyledTextFiled = styled(TextField)`
  margin: 0 8px 0 4px;
`;

type Props = {
  todoText: string;
  checked: boolean;
  disabled?: boolean;
  onRemoveClick: () => void;
  onCheckboxClick: () => null;
};

export const TodoRow: FC<Props> = ({
  todoText,
  checked,
  disabled,
  onRemoveClick,
  onCheckboxClick,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <Checkbox
        checked={checked}
        size="small"
        disabled={disabled}
        onChange={onCheckboxClick}
      />
      <Box mr={1} />
      <StyledTextFiled size="small" value={todoText} disabled={disabled} />
      <IconButton size="small" disabled={disabled} onClick={onRemoveClick}>
        <Cancel />
      </IconButton>
    </Box>
  );
};
