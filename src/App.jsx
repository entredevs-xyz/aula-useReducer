import { useState } from "react"

function App() {

  const [contador, setContador] = useState(0)

  const reiniciar = () => {
    setContador(0)
  }

  const adicionar = () => {
    setContador(contadorAtual => contadorAtual + 1)
  }

  const subtrair = () => {
    setContador(contadorAtual => contadorAtual - 1)
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 5
    }}>
      Contador: {contador}
      <div style={{
        display: 'flex',
        gap: 5
      }}>
        <button
          onClick={reiniciar}>
          Reiniciar
        </button>
        <button onClick={subtrair}>-</button>
        <button onClick={adicionar}>+</button>
      </div>
    </div>
  );
}

export default App;
