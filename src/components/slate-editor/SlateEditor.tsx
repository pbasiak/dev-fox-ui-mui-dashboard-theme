import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import { useCallback, useMemo } from 'react';
import { createEditor, Descendant } from 'slate';
import { Stack } from '@mui/material';
import { withHistory } from 'slate-history';
import isHotkey from 'is-hotkey';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import {
  Code,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
} from '@mui/icons-material';
import { toggleMark } from './utils/toggleMark.ts';
import { HOTKEYS } from './constants/hotkeys.ts';
import { SlateEditorContainer } from './components/slate-editor-container/SlateEditorContainer.tsx';
import { MarkButton } from './components/mark-button/MarkButton.tsx';
import { BlockButton } from './components/block-button/BlockButton.tsx';
import { Element } from './components/element/Element.tsx';
import { Leaf } from './components/leaf/Leaf.tsx';
import { TypographyType } from './components/typography-type/TypographyType.tsx';

interface Props {
  onChange?: (value: Descendant[]) => void;
  placeholder?: string;
  readOnly?: boolean;
  initialValue?: Descendant[];
}

export const SlateEditor = ({ onChange, placeholder, readOnly, initialValue }: Props) => {
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const editorValue = initialValue || [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ];

  return (
    <SlateEditorContainer readOnly={readOnly}>
      <Slate editor={editor} onChange={onChange} initialValue={editorValue}>
        {readOnly ? null : (
          <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'}>
            <TypographyType editor={editor} />
            <MarkButton format='bold' icon={<FormatBoldIcon />} />
            <MarkButton format='italic' icon={<FormatItalic />} />
            <MarkButton format='underline' icon={<FormatUnderlined />} />
            <MarkButton format='code' icon={<Code />} />
            <BlockButton format='block-quote' icon={<FormatQuote />} />
            <BlockButton format='numbered-list' icon={<FormatListNumbered />} />
            <BlockButton format='bulleted-list' icon={<FormatListBulleted />} />
            <BlockButton format='left' icon={<FormatAlignLeft />} />
            <BlockButton format='center' icon={<FormatAlignCenter />} />
            <BlockButton format='right' icon={<FormatAlignRight />} />
            <BlockButton format='justify' icon={<FormatAlignJustify />} />
          </Stack>
        )}
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder={placeholder}
          spellCheck
          readOnly={readOnly}
          autoFocus
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark: string = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </Slate>
    </SlateEditorContainer>
  );
};
