export type Props = {
  profile: any;
  handleAddQuestion: (
    fieldName: string,
    subFieldArrName: string,
    newQuestion: any
  ) => void;
  handleEditQuestion: (
    fieldName: string,
    subFieldArrName: string,
    id: number,
    newQuestion: any
  ) => void;
  handleToggleChange: (
    fieldName: string,
    subField: any,
    toggleField: any,
    value: any
  ) => void;
};
