import styled from "styled-components";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Form = styled.form`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  background-color: #FCFBFB;
  border-radius: 10px;
`;

const InputCadastro = styled(TextField)`
  width: 500px;
  margin: 15px auto;
  background-color: #FCFBFB;
`;

const ButtonCadastro = styled(Button)`
  width: 500px;
  margin: 10px auto;
  background-color: #51b7ae;
`;

export default { Form, InputCadastro, ButtonCadastro };
