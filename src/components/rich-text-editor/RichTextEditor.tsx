import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Toolbar } from './components/Toolbar.tsx';
import { alpha, css, GlobalStyles, Theme, useTheme } from '@mui/material';
import { Content } from '@tiptap/core';
import Placeholder from '@tiptap/extension-placeholder';

const styles = ({ theme, readOnly }: { theme: Theme; readOnly: boolean }) => css`
  .tiptap {
    border: 1px solid
      ${theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.23)
        : alpha(theme.palette.common.black, 0.23)};
    padding: 8px 12px;
    border-radius: ${theme.shape.borderRadius}px;
    outline: none !important;

    ${readOnly &&
    css`
      padding: 0;
      border: 0;
    `}

    :hover {
      border-color: ${theme.palette.primary.main};
    }

    :focus {
      border-width: 2px;
      padding-left: 11px;
      padding-top: 7px;
      border-color: ${theme.palette.primary.main};
    }
  }

  .tiptap p.is-editor-empty:first-of-type::before {
    color: #adb5bd;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }
`;

interface Props {
  onChange?: (value: unknown) => void;
  placeholder?: string;
  readOnly?: boolean;
  initialValue?: Content;
}

export const RichTextEditor = ({ onChange, placeholder, readOnly = false, initialValue }: Props) => {
  const theme = useTheme();

  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder: placeholder ? placeholder : '' })],
    content: initialValue ? initialValue : '',
    editable: !readOnly,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  return (
    <>
      <GlobalStyles styles={styles({ theme, readOnly })} />
      {readOnly ? null : <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </>
  );
};
