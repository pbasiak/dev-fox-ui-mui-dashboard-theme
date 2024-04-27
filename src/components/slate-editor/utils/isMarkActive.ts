import { Editor } from 'slate';

export const isMarkActive = (editor: Editor, format: string) => {
  const marks = Editor.marks(editor) as { [key: string]: boolean } | null;
  return marks ? marks[format] : false;
};
