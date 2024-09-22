import {TableCell, TableCellProps} from '@mui/material';

interface TableCellRowrProps extends TableCellProps {}

export function TableCellRow(props: TableCellRowrProps) {
  return (
    <TableCell className="text-xs" align="left" {...props}></TableCell>
  )
}