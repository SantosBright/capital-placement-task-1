export type Props = {
  personalInformation: any;
  handleAddQuestion: (
    fieldName: string,
    subFieldArrName: string,
    newQuestion: any
  ) => void;
  handleEditQuestion: (
    fieldName: string,
    subFieldArrName: string,
    index: number,
    newQuestion: any
  ) => void;
  handleToggleChange: (
    fieldName: string,
    subField: any,
    toggleField: any,
    value: any
  ) => void;
};
