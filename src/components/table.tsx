import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type TableProps<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
};
const Table = <T,>({ data, columns }: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table width={500}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const columnRelativeDepth = header.depth - header.column.depth;
              if (columnRelativeDepth > 1) {
                return null;
              }

              let rowSpan = 1;
              if (header.isPlaceholder) {
                const leafs = header.getLeafHeaders();
                rowSpan = leafs[leafs.length - 1].depth - header.depth;
              }

              return (
                <th key={header.id} colSpan={header.colSpan} rowSpan={rowSpan}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
