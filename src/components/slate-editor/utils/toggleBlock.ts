import { Editor, Element, Transforms } from 'slate';
import { isBlockActive } from './isBlockActive.ts';
import { LIST_TYPES } from '../constants/listTypes.ts';
import { TEXT_ALIGN_TYPES } from '../constants/textAlignTypes.ts';
import { CustomElement } from '../types/slateNodeElement.ts';

export const toggleBlock = (editor: Editor, format: string) => {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type');
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes<CustomElement>(editor, {
    match: (node): boolean =>
      !Editor.isEditor(node) &&
      Element.isElement(node) &&
      LIST_TYPES.includes(node.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties: Partial<CustomElement>;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : (format as CustomElement['type']),
    };
  }
  Transforms.setNodes<Element>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format as CustomElement['type'], children: [] };
    Transforms.wrapNodes(editor, block);
  }
};
