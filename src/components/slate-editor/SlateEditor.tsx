import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import { useCallback, useMemo } from 'react';
import { createEditor, Descendant } from 'slate';
import { List, Typography } from '@mui/material';
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

interface Props {
  onChange: (value: Descendant[]) => void;
  placeholder?: string;
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
];

export const SlateEditor = ({ onChange, placeholder }: Props) => {
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <SlateEditorContainer>
      <Slate editor={editor} initialValue={initialValue} onChange={onChange}>
        <List>
          <MarkButton format='bold' icon={<FormatBoldIcon />} />
          <MarkButton format='italic' icon={<FormatItalic />} />
          <MarkButton format='underline' icon={<FormatUnderlined />} />
          <MarkButton format='code' icon={<Code />} />
          <BlockButton format='heading-one' icon={<Typography fontWeight={'fontWeightBold'}>H1</Typography>} />
          <BlockButton format='heading-two' icon={<Typography fontWeight={'fontWeightBold'}>H2</Typography>} />
          <BlockButton format='block-quote' icon={<FormatQuote />} />
          <BlockButton format='numbered-list' icon={<FormatListNumbered />} />
          <BlockButton format='bulleted-list' icon={<FormatListBulleted />} />
          <BlockButton format='left' icon={<FormatAlignLeft />} />
          <BlockButton format='center' icon={<FormatAlignCenter />} />
          <BlockButton format='right' icon={<FormatAlignRight />} />
          <BlockButton format='justify' icon={<FormatAlignJustify />} />
        </List>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder={placeholder}
          spellCheck
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
