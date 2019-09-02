export interface NodeProps {
  id: string;
  data: any;
  focused?: boolean;
  onEvent: (action, id, ...rest) => object | void;
  onResize: (action?, id?) => object | void;

  isRoot?: boolean;
}

export const defaultNodeProps = {
  id: '',
  data: {},
  onEvent: () => {},
  onResize: () => {},
};