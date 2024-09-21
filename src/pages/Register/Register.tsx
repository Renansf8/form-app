import { Box, Container, Typography } from "@mui/material";
import { Form } from "../../components/form/Form";
import { useRegister } from "../../context/context";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";


export function Register() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/list");
  }

  const { getAllRegisters } = useRegister()
  const { data } = getAllRegisters()
  console.log('data', data)

  return (
    <Container className="relative flex flex-col justify-center items-center px-6 py-8 bg-stone-100 mt-[72px] rounded-xl">
      <Typography className="text-[#242424] text-xl mb-4">Preencha seus dados</Typography>
      <Form />
      <div onClick={handleClick} className="flex items-center mt-4 cursor-pointer hover:translate-x-3 transition-all">
        <Typography className="text-[#7913d8] font-bold">Ir para a lista de registros</Typography>
        <ArrowForwardIcon className="text-[#7913d8] ml-4" />
      </div>
    </Container>
  )
}