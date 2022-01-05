import React,{useState} from 'react'
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner.jsx';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan:''
    }
  });

  const [loading,setLoading]=useState(false);

  // Extraer datos

  const { datos,cotizacion } = resumen;

  return (
    <Contenedor>
      <Header 
        titulo={'Cotizacion de Seguros'}
        />
        <ContenedorFormulario>
          <Formulario 
            setResumen={setResumen}
            setLoading={setLoading}
          />
        {loading ? <Spinner/> : null }
        <Resumen 
          datos={datos}
        />
        { !loading ? 
          <Resultado 
            cotizacion={cotizacion}
          /> : null 
        }
        </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
