import { Editor } from '@tiptap/react';
import { IconButton, Stack, Typography } from '@mui/material';
import {
  FormatItalic,
  FormatBold,
  FormatStrikethrough,
  Code,
  Clear,
  ClearAll,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  HorizontalRule,
  ArrowDownward,
  Redo,
  Undo,
} from '@mui/icons-material';
import { ReactNode } from 'react';

const ToolbarButton = ({
  isActive,
  onClick,
  disabled,
  children,
}: {
  isActive?: boolean;
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}) => {
  return (
    <IconButton onClick={onClick} disabled={disabled} color={isActive ? 'primary' : 'default'}>
      {children}
    </IconButton>
  );
};

const TextButton = ({
  isActive,
  onClick,
  disabled,
  children,
}: {
  isActive?: boolean;
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}) => {
  return (
    <IconButton onClick={onClick} disabled={disabled} color={isActive ? 'primary' : 'default'}>
      <Typography fontWeight={'fontWeightMedium'} fontSize={'medium'} minWidth={21}>
        {children}
      </Typography>
    </IconButton>
  );
};
export const Toolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <Stack>
      <Stack direction={'row'}>
        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          isActive={editor?.isActive('bold')}
        >
          <FormatBold />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          isActive={editor?.isActive('italic')}
        >
          <FormatItalic />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          isActive={editor?.isActive('strike')}
        >
          <FormatStrikethrough />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          isActive={editor?.isActive('code')}
        >
          <Code />
        </ToolbarButton>

        <ToolbarButton onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
          <Clear />
        </ToolbarButton>

        <ToolbarButton onClick={() => editor?.chain().focus().clearNodes().run()}>
          <ClearAll />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <Undo />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <Redo />
        </ToolbarButton>
      </Stack>

      <Stack direction={'row'} alignItems={'center'}>
        <TextButton
          onClick={() => editor?.chain().focus().setParagraph().run()}
          isActive={editor?.isActive('paragraph')}
        >
          P
        </TextButton>

        <TextButton
          onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor?.isActive('heading', { level: 1 })}
        >
          H1
        </TextButton>

        <TextButton
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor?.isActive('heading', { level: 2 })}
        >
          H2
        </TextButton>

        <TextButton
          onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor?.isActive('heading', { level: 3 })}
        >
          H3
        </TextButton>

        <TextButton
          onClick={() => editor?.chain().focus().toggleHeading({ level: 4 }).run()}
          isActive={editor?.isActive('heading', { level: 4 })}
        >
          H4
        </TextButton>

        <TextButton
          onClick={() => editor?.chain().focus().toggleHeading({ level: 5 }).run()}
          isActive={editor?.isActive('heading', { level: 5 })}
        >
          H5
        </TextButton>

        <TextButton
          onClick={() => editor?.chain().focus().toggleHeading({ level: 6 }).run()}
          isActive={editor?.isActive('heading', { level: 6 })}
        >
          H6
        </TextButton>
        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          isActive={editor?.isActive('bulletList')}
        >
          <FormatListBulleted />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          isActive={editor?.isActive('orderedList')}
        >
          <FormatListNumbered />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
          isActive={editor?.isActive('codeBlock')}
        >
          <Code />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          isActive={editor?.isActive('blockquote')}
        >
          <FormatQuote />
        </ToolbarButton>

        <ToolbarButton onClick={() => editor?.chain().focus().setHorizontalRule().run()}>
          <HorizontalRule />
        </ToolbarButton>

        <ToolbarButton onClick={() => editor?.chain().focus().setHardBreak().run()}>
          <ArrowDownward />
        </ToolbarButton>
      </Stack>
    </Stack>
  );
};
