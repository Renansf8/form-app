import { Form } from "../Form/Form";
import { ModalProps } from "./IEditModal";
import { useRegister } from "../../context/context";

import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  color: "black",
  borderRadius: '8px'
};

export function EditModal({ open, setOpen }: ModalProps) {
  const { registerSelected } = useRegister()
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="text-lg w-[100%] text-center mb-4 font-semibold">Edite as informações de registro</Typography>
          <Form info={ registerSelected } isEditForm />
        </Box>
      </Modal>
    </>
  )
}
