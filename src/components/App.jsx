import { useRoutes } from "react-router-dom";
import AlunosListagem from '../pages/alunos/AlunosListagem';
import CadastrarAlunos from "../pages/alunos/CadastrarAlunos";
import Container from '@mui/material/Container';

const Routes = () => {
    const routes = useRoutes([
      { path: "/", element: <AlunosListagem /> },
      { path: "/listar-alunos", element: <AlunosListagem /> },
      { path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
      { path: "/editar-alunos/:id", element: <CadastrarAlunos /> },
    ]);
  
    return routes;
}

const App = () => {
    return (
        <Container maxWidth="md">
            <Routes />
        </Container>
    );
};

export default App;