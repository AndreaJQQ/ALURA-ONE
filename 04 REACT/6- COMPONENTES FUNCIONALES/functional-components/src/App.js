import './App.css';
import Container from '@mui/material/Container';
import FormSignUp from './components/FormSignUp';
import Typography from '@mui/material/Typography';



function App() {

  const handleSubmit = (values) => {
    console.log('APPJS: ', values)
  }


  return (
    <Container component = "section" maxWidth="sm">
    <Typography variant ="h3" align = "center" component ="h1">Registry Form</Typography>
    <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
