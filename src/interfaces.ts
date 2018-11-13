import { RouteComponentProps } from "@reach/router";

export interface Tea {
  id: string;
  name: string;
  brand: string;
  type: string;
  servings: string;
}

export interface Props extends RouteComponentProps {
  tea: {
    id: string;
    name: string;
    brand: string;
    type: string;
    servings: string;
  };
  teas: Tea[];
  types: string[];
  id: string;
}

export interface State {
  teas: Tea[];
  types: string[];
  id: string;
}

export interface Action {
  type: string;
  payload: object;
}
