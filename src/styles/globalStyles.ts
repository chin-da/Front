import { globalCss } from '@/styles/stitches.config';

export const globalStyles = globalCss({
  /***
    The new CSS reset - version 1.9 (last updated 19.6.2023)
    GitHub page: https://github.com/elad2412/the-new-css-reset
  ***/
  '*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))':
    {
      all: 'unset',
      display: 'revert',
    },
  '*, *::before, *::after': { boxSizing: 'border-box' },
  'a, button': { cursor: 'revert' },
  'ol, ul, menu': { listStyle: 'none' },
  img: { maxInlineSize: '100%', maxBlockSize: '100%' },
  table: { borderCollapse: 'collapse' },
  'input, textarea': { WebkitUserSelect: 'auto' },
  textarea: { whiteSpace: 'revert' },
  meter: { WebkitAppearance: 'revert', appearance: 'revert' },
  ':where(pre)': { all: 'revert' },
  '::placeholder': { color: 'unset' },
  '::marker': { content: 'initial' },
  ':where([hidden])': { display: 'none' },
  ':where([contenteditable]:not([contenteditable="false"]))': {
    MozUserModify: 'read-write',
    WebkitUserModify: 'read-write',
    overflowWrap: 'break-word',
    WebkitLineBreak: 'after-white-space',
    WebkitUserSelect: 'auto',
  },
  ':where([draggable="true"])': { WebkitUserDrag: 'element' },
  ':where(dialog:modal)': { all: 'revert' },
});
