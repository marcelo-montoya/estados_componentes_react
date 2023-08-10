import { useState } from "react";
import Formulario from "./components/Formulario";
import Button from "./components/Button";

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
      <h1>
        Desafío estados de los componentes y eventos
      </h1>
      <div className="formulario">
        <Formulario
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
        />
        {password == 252525 ? <Button title='Submit'/> : null}

      </div>
    </div>
  );
}

export default App;
