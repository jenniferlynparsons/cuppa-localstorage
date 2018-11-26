import { RouteComponentProps } from "@reach/router";

export interface Tea {
  flash: {
    name: string;
    id: string;
  };
  id: string;
  name: string;
  brand: string;
  teaType: string;
  servings: string;
  edit: boolean;
}

export type TeaTypes = string[];

export type Teas = Tea[];

export interface Props extends RouteComponentProps {
  tea: Tea;
  teas: Tea[];
  teaTypes: TeaTypes;
  id: string;

  handleSubmit: (tea: Tea) => void;
  handleDelete: (tea: Tea) => void;
}

export interface State {
  flash: {
    name: string;
    id: string;
  };
  teas: Tea[];
  teaTypes: TeaTypes;
  id: string;
}

export interface Action {
  type: string;
  payload: object;
}
