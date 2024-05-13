import { typographyTypes } from '../../constants/typographyTypes.ts';
import { FormControl, SelectChangeEvent } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { TypographyTypeItem, TypographyTypeSelect } from './TypographyType.styled.ts';
import { toggleBlock } from '../../utils/toggleBlock.ts';
import { CustomEditor } from '../../types/slateNodeElement.ts';

export const TypographyType = ({ editor }: { editor: CustomEditor }) => {
  const [selectedNode, setSelectedNode] = useState<string>('paragraph');

  useEffect(() => {
    // Might be good to extend slate editor type with custom fields like `type` to avoid this type assertion
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (editor?.getFragment()?.[0]?.type) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setSelectedNode(editor.getFragment()?.[0]?.type);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
  }, [editor.getFragment()?.[0]?.type]);

  const handleTypeChange = useCallback((event: SelectChangeEvent<string>) => {
    toggleBlock(editor, event.target.value);
  }, []);

  const types = typographyTypes.map(({ type, label, level, bold }) => (
    <TypographyTypeItem
      key={type}
      value={type}
      sx={{
        fontSize: level ? `calc(${level}px / -1 + 16px)` : '14px',
        fontWeight: bold ? 'fontWeightBold' : 'fontWeightRegular',
      }}
    >
      {label}
    </TypographyTypeItem>
  ));
  return (
    <FormControl sx={{ m: 0, minWidth: 100 }}>
      <TypographyTypeSelect size={'small'} variant={'outlined'} value={selectedNode} onChange={handleTypeChange}>
        {types}
      </TypographyTypeSelect>
    </FormControl>
  );
};
