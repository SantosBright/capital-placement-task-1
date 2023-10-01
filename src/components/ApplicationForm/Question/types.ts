type IQuestion = {
  question: string;
  caption?: string;
  isAdded?: boolean;
  type: string;
  id?: any;
  fieldName?: string;
  show?: boolean;
  internalUse?: boolean;
  mandatory?: boolean;
  fieldLabel?: string;
};

export type Props = {
  question: IQuestion;
  handleEditQuestion?: any;
  handleToggleChange?: any;
};
