import { Container, Typography } from "@mui/material";
import { Form } from "../../components/Form/Form";

export function RegisterUser() {
  return (
    <Container className="relative w-[50%] flex flex-col justify-center items-center px-6 py-8 bg-stone-100 mt-[72px] rounded-xl">
      <Typography className="text-[#242424] text-xl mb-4">Preencha seus dados</Typography>
      <Form />
    </Container>
  )
}