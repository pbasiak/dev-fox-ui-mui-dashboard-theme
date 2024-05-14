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
  onChange: (value: Descendant[]) => void;
  placeholder?: string;
  readOnly: boolean;
}

const initialValue: Descendant[] = [
  {
    type: 'heading-one',
    children: [
      {
        text: 'Heading 1',
      },
    ],
  },
  {
    type: 'heading-two',
    children: [
      {
        text: 'Heading 2',
      },
    ],
  },
  {
    type: 'heading-three',
    children: [
      {
        text: 'Heading 3',
      },
    ],
  },
  {
    type: 'heading-four',
    children: [
      {
        text: 'Heading 4',
      },
    ],
  },
  {
    type: 'heading-five',
    children: [
      {
        text: 'Heading 5',
      },
    ],
  },
  {
    type: 'heading-six',
    children: [
      {
        text: 'Heading 6',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text bold, or add a semantically rendered block quote in the middle of the page, like this:",
      },
    ],
  },
  {
    type: 'block-quote',
    children: [
      {
        text: 'A wise quote.',
      },
    ],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [
      {
        text: 'Try it out for yourself!',
      },
    ],
  },
];

export const SlateEditor = ({ onChange, placeholder, readOnly }: Props) => {
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <SlateEditorContainer readOnly={readOnly}>
      <Slate editor={editor} initialValue={initialValue} onChange={onChange}>
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
