import { RegistersTable } from "../../components/registersTable/RegistersTable";

import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function RegistersList() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <Container className="relative w-[100%] flex-col justify-center items-center mt-[80px] text-xs">
      <div onClick={handleClick} className="flex items-center mb-4 cursor-pointer hover:-translate-x-3 transition-all text-[#fff]">
        <ArrowBackIcon />
        <Typography className="ml-4 font-bold">Voltar para o cadastro</Typography>
      </div>
      <RegistersTable />
    </Container>
  )
}
