import { ReactNode } from 'react';
import { useSlate } from 'slate-react';
import { IconButton } from '@mui/material';
import { toggleBlock } from '../../utils/toggleBlock.ts';
import { isBlockActive } from '../../utils/isBlockActive.ts';
import { TEXT_ALIGN_TYPES } from '../../constants/textAlignTypes.ts';

interface BlockButtonProps {
  format: string;
  icon: ReactNode;
}

export const BlockButton = ({ format, icon }: BlockButtonProps) => {
  const editor = useSlate();

  return (
    <IconButton
      color={
        isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type') ? 'primary' : 'default'
      }
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </IconButton>
  );
};
