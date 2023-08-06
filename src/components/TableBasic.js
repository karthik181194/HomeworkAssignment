import React, { useContext } from "react";
import { ApiContext } from "./ParentWrapper";
import { useTable, usePagination, useSortBy } from 'react-table'
import { bylineColumn, imageColumn, videoColumn } from './Columns';
import EditableTableCell from "./EditableTableCell";

const TableBasic = ({ currentTab }) => {

  const value = useContext(ApiContext);
  let columns;
  if (currentTab === "Image") {
    columns = imageColumn;
  }
  else if (currentTab === "Video") {
    columns = videoColumn;
  }
  else {
    columns = bylineColumn;
  }

  function returnCellValue(input) {
    if (input.cell.value) {
      switch (input?.cell?.column?.id) {
        case "bylines[0].url":case "bylines[0].twitter_url":case "video.url":
          return <a href={input.cell.value} rel="noreferrer" target="_blank">{input.cell.value}</a>
        case "image.ratios.16:9.100":
          return <img src={input.cell.value} alt={"thumbnail"} />
        case "image.date":
          return <span>{(input.cell.value).replace(/T/g, " ")}</span>
        default:
          return input.cell.value
      }
    }
    else {
      return '-'
    }
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable({
    columns,
    data: value,
    defaultColumn: {
      Cell: returnCellValue,
      width: 150
    },
    initialState: { pageIndex: 0, pageSize: 5 },
  }, useSortBy, usePagination)

  const { pageIndex } = state

  return (
    <div className="w-100">
      <table className="table table-dark table-striped shadow mb-0" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span className={`${column.isSorted ? (column.isSortedDesc ? "caret caret-down" : "caret") : ''} ms-2`}>
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell,index) => {
                  return (
                    <React.Fragment key={index}>
                    { cell.column.id === "video.url" &&
                      <>
                        <EditableTableCell value={cell.value} />
                      </>
                    }
                    {cell.column.id !== "video.url" &&
                      <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    }
                  </React.Fragment>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-between w-100 rounded-bottom p-2 table-components-theme table-footer">
        <div className="px-2">Page{' '} <strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</div>
        <div>
          <button className="btn btn-sm me-2 btn-dark" disabled={!canPreviousPage} onClick={() => previousPage()}>Previous</button>
          <button className="btn btn-sm btn-dark" disabled={!canNextPage} onClick={() => nextPage()}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default TableBasic;