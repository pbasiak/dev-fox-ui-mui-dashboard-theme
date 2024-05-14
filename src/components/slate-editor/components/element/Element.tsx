import { RenderElementProps } from 'slate-react';
import { CSSProperties } from 'react';

export const Element = ({ attributes, children, element }: RenderElementProps) => {
  // @ts-expect-error - align is a string
  const style: CSSProperties = { textAlign: element.align };
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case 'heading-three':
      return (
        <h3 style={style} {...attributes}>
          {children}
        </h3>
      );
    case 'heading-four':
      return (
        <h4 style={style} {...attributes}>
          {children}
        </h4>
      );
    case 'heading-five':
      return (
        <h5 style={style} {...attributes}>
          {children}
        </h5>
      );
    case 'heading-six':
      return (
        <h6 style={style} {...attributes}>
          {children}
        </h6>
      );
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};
