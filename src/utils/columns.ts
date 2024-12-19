import { CellContext } from "@tanstack/react-table";
import { Person } from "../types";

type ColumnProps = {
  cell: (info: CellContext<Person, string>) => React.ReactNode;
};

export const firstName = ({ cell }: ColumnProps) => {
  return {
    header: "First Name",
    accessorKey: "firstName",
    cell,
  };
};

export const lastName = ({ cell }: ColumnProps) => {
  return {
    header: "Last Name",
    accessorKey: "lastName",
    cell,
  };
};

export const age = ({ cell }: ColumnProps) => {
  return {
    header: "Age",
    accessorKey: "age",
    cell,
  };
};
