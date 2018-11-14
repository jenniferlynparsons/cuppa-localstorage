import { RouteComponentProps } from "@reach/router";

export interface Tea {
  id: string;
  name: string;
  brand: string;
  teaType: string;
  servings: string;
}

export type TeaTypes = string[];

export interface Props extends RouteComponentProps {
  tea: {
    id: string;
    name: string;
    brand: string;
    teaType: string;
    servings: string;
  };
  teas: Tea[];
  teaTypes: TeaTypes;
  id: string;
}

export interface State {
  teas: Tea[];
  teaTypes: TeaTypes;
  id: string;
}

export interface Action {
  type: string;
  payload: object;
}
