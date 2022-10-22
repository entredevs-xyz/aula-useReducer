import { useReducer, useRef } from "react"


const initialState = { valor: 0 }

const reducer = (state, action) => {

  switch (action.type) {
    case 'adicionar':
      return {
        valor: state.valor + 1
      }
    case 'subtrair':
      return {
        valor: state.valor - 1
      }
    case 'reiniciar':
      return {
        valor: 0
      }
    case 'adicionarValor':
      return {
        valor: state.valor + action.payload
      }

    default:
      break;
  }

}

const actions = {

  reiniciar: () => {
    return { type: 'reiniciar' }
  },
  adicionar: () => {
    return { type: 'adicionar' }
  },
  subtrair: () => {
    return { type: 'subtrair' }
  },
  adicionarValor: (valor) => {
    return { type: 'adicionarValor', payload: valor }
  },

}


function App() {

  const [contador, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef(null)

  const reiniciar = () => {
    dispatch(actions.reiniciar())
  }

  const adicionar = () => {
    dispatch(actions.adicionar())
  }

  const subtrair = () => {
    dispatch(actions.subtrair())
  }

  const adicionarValor = () => { 
      const valorInput = inputRef.current.value
      var valorInputNumero = parseInt(valorInput)
      dispatch(actions.adicionarValor(valorInputNumero))

  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 5
    }}>
      Contador: {contador.valor}
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
        <input ref={inputRef} type="number" />
        <button onClick={adicionarValor}> Valor </button>
      </div>
    </div>
  );
}

export default App;
