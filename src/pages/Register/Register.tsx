import { Container, Typography } from "@mui/material";
import { Form } from "../../components/Form/Form";
import { useRegister } from "../../context/context";


export function Register() {
  const { getAllRegisters } = useRegister()
  const { data } = getAllRegisters()
  console.log('data', data)

  return (
    <Container className="relative w-[50%] flex flex-col justify-center items-center px-6 py-8 bg-stone-100 mt-[72px] rounded-xl">
      <Typography className="text-[#242424] text-xl mb-4">Preencha seus dados</Typography>
      <Form />
    </Container>
  )
}