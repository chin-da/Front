import { without, union } from 'lodash';

const Handler = (checkedListState: [string[], React.Dispatch<React.SetStateAction<string[]>>]) => {
  const [checkedList, setCheckList] = checkedListState;
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean | undefined) => {
    e.stopPropagation();
    !checked ? setCheckList([...checkedList, e.target.value]) : setCheckList(without(checkedList, e.target.value));
  };

  const handleCheckBoxAll = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean | undefined,
    childValues: string[],
  ) => {
    e.stopPropagation();
    !checked
      ? setCheckList(union([...checkedList, ...childValues]))
      : setCheckList(without(checkedList, ...childValues));
  };
  return { handleCheckBox, handleCheckBoxAll };
};

export default Handler;
