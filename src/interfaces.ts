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
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBrandChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleServingsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  getDetails: (id: string) => void;
}

export interface State {
  tea: {
    id: string;
    name: string;
    brand: string;
    type: string;
    servings: string;
  };
  teas: [
    {
      id: string;
      name: string;
      brand: string;
      type: string;
      servings: string;
    }
  ];
  types: string[];
  id: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBrandChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleServingsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (event: any) => void;
  handleDelete: (event: any) => void;
  getDetails: (id: string) => void;
}
