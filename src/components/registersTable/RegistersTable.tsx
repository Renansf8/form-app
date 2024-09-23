import { useRegister } from "../../context/context";
import { TableHeader } from './Table-header';
import { TableCellRow } from './Table-cell';
import { ToastContainer } from 'react-toastify';
import { EditModal } from '../editModal/EditModal';
import { RegisterProps } from '../../context/IContext';

import { Button, Container, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function RegistersTable() {
  const { 
    getAllRegisters, 
    removeRegister, 
    setRegisterSelected, 
    setOpen, 
    open 
  } = useRegister()
  const { data, refetch } = getAllRegisters()

  const { mutate } = removeRegister(refetch)

  function handleOpenModal(info: RegisterProps) {
    setRegisterSelected(info)
    setOpen(true)
  }

  return (    
      <TableContainer component={Paper} className="w-[100%]">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableHeader>Nome</TableHeader>
              <TableHeader>CPF</TableHeader>
              <TableHeader>E-mail</TableHeader>
              <TableHeader>Telefone</TableHeader>
              <TableHeader>Endereço</TableHeader>
              <TableHeader>Ação</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((row: RegisterProps) => (
              <TableRow
                key={row.id}
              >
                <TableCellRow>{row.name}</TableCellRow>
                <TableCellRow>{row.cpf}</TableCellRow>
                <TableCellRow>{row.email}</TableCellRow>
                <TableCellRow>{row.phone}</TableCellRow>
                <TableCellRow>{row.address}</TableCellRow>
                <TableCellRow className="text-xs">
                  <Button onClick={() => handleOpenModal(row)} variant="contained" className="text-xs mr-2 font-semibold">Editar</Button>
                  <Button onClick={() => mutate(row.id)} variant="contained" className="text-xs font-semibold" color="error">Deletar</Button>
                </TableCellRow>
              </TableRow>
            ))}
           
          </TableBody>
        </Table>
        {data.length === 0 && (
          <Container className='w-[90%] flex items-center justify-center text-center h-[160px]'>
            <Typography className="text-[#565656]">A lista ainda não possui nenhum registro!</Typography>
          </Container>
        )}
        <ToastContainer closeOnClick theme="light" />
        <EditModal 
          open={open}
          setOpen={setOpen}
        />
      </TableContainer>
  )
}