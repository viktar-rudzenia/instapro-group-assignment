import { Dispatch, SetStateAction, createContext } from 'react';

import { ColumnInterface } from 'src/interfaces';

const TrelloBoardContext = createContext<{
  columns: ColumnInterface[];
  setColumns: Dispatch<SetStateAction<ColumnInterface[]>>;
}>({
  columns: [],
  setColumns: () => {},
});

export default TrelloBoardContext;
