import { Container, Typography } from "@mui/material";
import { RegistersTable } from "../../components/registersList/RegistersTable";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function ListRegisters() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <Container className="relative w-[100%] flex-col justify-center items-center mt-[80px] text-xs">
      <div onClick={handleClick} className="flex items-center mb-4 cursor-pointer hover:-translate-x-3 transition-all">
        <ArrowBackIcon />
        <Typography className="ml-4 font-bold">Voltar para o cadastro</Typography>
      </div>
      <RegistersTable />
    </Container>
  )
}