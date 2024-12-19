import { createColumnHelper } from "@tanstack/react-table";
import Table from "./components/table";
import { defaultData } from "./constant";
import "./index.css";
import { Person } from "./types";

export default function App() {
  const columnHelper = createColumnHelper<Person>();
  const columns = [
    columnHelper.accessor("firstName", {
      id: "firstName",
      header: "시간",
      meta: { rowSpan: 3 },
    }),

    columnHelper.group({
      header: "melon",
      columns: [
        columnHelper.group({
          id: "TOP100",
          header: "TOP100",
          columns: [
            columnHelper.accessor("age", {
              header: "순위",
            }),
            columnHelper.accessor("visits", {
              header: "변동",
            }),
          ],
        }),
        columnHelper.group({
          id: "HOT100",
          header: "HOT100",
          columns: [
            columnHelper.accessor("status", {
              header: "순위",
            }),
            columnHelper.accessor("progress", {
              header: "변동",
            }),
          ],
        }),
      ],
    }),
    columnHelper.group({
      header: "지니",
      columns: [
        columnHelper.group({
          id: "TOP100",
          header: "TOP100",
          columns: [
            columnHelper.accessor("age", {
              header: "순위",
            }),
            columnHelper.accessor("visits", {
              header: "변동",
            }),
          ],
        }),
        columnHelper.group({
          id: "HOT100",
          header: "HOT100",
          columns: [
            columnHelper.accessor("status", {
              header: "순위",
            }),
            columnHelper.accessor("progress", {
              header: "변동",
            }),
          ],
        }),
      ],
    }),
  ];

  return <Table data={defaultData} columns={columns} />;
}
