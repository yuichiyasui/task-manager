import type { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Table = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

type HeaderProps = {
  columns: (ReactElement | string)[];
};

const TableHeader = ({ columns }: HeaderProps) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column, index) => (
          <th
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

type BodyProps = {
  rows: { cells: (ReactElement | string | number)[] }[];
};

const TableBody = ({ rows }: BodyProps) => {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {rows.map((row, index) => (
        <tr
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
        >
          {row.cells.map((cell, index) => (
            <td
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

Table.Header = TableHeader;
Table.Body = TableBody;
