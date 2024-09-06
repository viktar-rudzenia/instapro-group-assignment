export interface CardInterface {
  id: number;
  label: string;
}

export interface ColumnInterface {
  id: number;
  label: string;
  cards: CardInterface[];
}
