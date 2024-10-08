import { Form } from "../../components/Form/Form";

import { Container, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";


export function Register() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/list");
  }

  return (
    <Container className="w-[90%] relative flex flex-col justify-center items-center px-6 py-8 bg-stone-100 mt-[72px] rounded-xl">
      <Typography className="text-[#565656] text-xl mb-4 font-bold">Preencha os dados de registro</Typography>
      <Form />
      <div onClick={handleClick} className="flex items-center mt-4 cursor-pointer hover:translate-x-3 transition-all">
        <Typography className="text-[#f47915] font-bold">Ir para a lista de registros</Typography>
        <ArrowForwardIcon className="text-[#f47915] ml-4" />
      </div>
    </Container>
  )
}
