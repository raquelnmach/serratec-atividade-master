import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: "#1a746b"}}>
        <Toolbar>
        <Link to="/listar-alunos">
          <IconButton size="medium">
            <PeopleAltIcon/>
          </IconButton>          
            <Button color="inherit">Lista de Alunos</Button>
          </Link>
          <Link to="/cadastrar-alunos">
             <Button color="inherit">Cadastro de Alunos</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
