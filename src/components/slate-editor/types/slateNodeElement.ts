import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';

export type FormattedText = {
  text: string;
  bold?: true;
  align?: string;
  italic?: true;
  underline?: true;
  code?: true;
};

export type CustomText = FormattedText;

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export type ParagraphElement = {
  type: 'paragraph';
  align?: string;
  children: CustomText[];
};

export type ListItemsElement = {
  type: 'list-item';
  align?: string;
  children: CustomText[];
};

export type BlockQuoteElement = {
  type: 'block-quote';
  align?: string;
  children: CustomText[];
};

export type BulletedListElement = {
  type: 'bulleted-list';
  align?: string;
  children: ListItemsElement[];
};

export type HeadingOneElement = {
  type: 'heading-one';
  align?: string;
  children: CustomText[];
};

export type HeadingTwoElement = {
  type: 'heading-two';
  align?: string;
  children: CustomText[];
};

export type HeadingThreeElement = {
  type: 'heading-three';
  align?: string;
  children: CustomText[];
};

export type HeadingFourElement = {
  type: 'heading-four';
  align?: string;
  children: CustomText[];
};

export type HeadingFiveElement = {
  type: 'heading-five';
  align?: string;
  children: CustomText[];
};

export type HeadingSixElement = {
  type: 'heading-six';
  align?: string;
  children: CustomText[];
};

export type NumberedListElement = {
  type: 'numbered-list';
  align?: string;
  children: ListItemsElement[];
};

export type CustomElement =
  | ParagraphElement
  | BlockQuoteElement
  | ListItemsElement
  | BulletedListElement
  | HeadingOneElement
  | HeadingTwoElement
  | HeadingThreeElement
  | HeadingFourElement
  | HeadingFiveElement
  | HeadingSixElement
  | NumberedListElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
