import {TableCell, TableCellProps} from '@mui/material';

interface TableHeaderProps extends TableCellProps {}

export function TableHeader(props: TableHeaderProps) {
  return (
    <TableCell className='font-bold' {...props}></TableCell>
  )
}