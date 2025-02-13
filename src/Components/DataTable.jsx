import React from "react";
import { useTable, useSortBy } from "react-table";
import { LuChevronsUpDown } from "react-icons/lu";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const DataTable = ({ data, columns, sortableColumns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table
                {...getTableProps()}
                className="table-auto min-w-full border border-black font-lato"
              >
                <thead className="border border-black bg-blue-100">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            sortableColumns.includes(column.Header)
                              ? column.getSortByToggleProps()
                              : {}
                          )}
                          className="border border-black p-4"
                        >
                          <div className="flex justify-center items-center gap-10">
                            <span>{column.render("Header")}</span>
                            {sortableColumns.includes(column.Header) ? (
                              <span>
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <AiOutlineArrowDown />
                                  ) : (
                                    <AiOutlineArrowUp />
                                  )
                                ) : (
                                  <LuChevronsUpDown />
                                )}
                              </span>
                            ) : null}
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        className="text-center bg-white"
                        key={row.id}
                      >
                        {row.cells.map((cell) => (
                          <td
                            {...cell.getCellProps()}
                            className="border border-black p-4"
                          >
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
