import { ReactNode } from 'react';
import { useSlate } from 'slate-react';
import { IconButton } from '@mui/material';
import { isMarkActive } from '../../utils/isMarkActive.ts';
import { toggleMark } from '../../utils/toggleMark.ts';

export const MarkButton = ({ format, icon }: { format: string; icon: ReactNode }) => {
  const editor = useSlate();
  return (
    <IconButton
      color={isMarkActive(editor, format) ? 'primary' : 'default'}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </IconButton>
  );
};
