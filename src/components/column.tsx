import { CellContext } from "@tanstack/react-table";
import React from "react";
import { Person } from "../types";

type ColumnProps = CellContext<Person, string>;

const Column = ({ row }: ColumnProps) => {
  const { firstName } = row.original;
  return <span title={firstName}>{firstName}</span>;
};

export default Column;
