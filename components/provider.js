import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({
    children
  }) {
  const [cursos, setCursos] = useState([
    { id: 1, nome: 'Ciência da Computação', area: "Exatas", resumo: "Curso top", precoMensalidade: "700" },
    { id: 2, nome: 'Ciências Contábeis', area: "Exatas", resumo: "Curso mais ou menos", precoMensalidade: "400" }
  ]);
  const [nome, setNome] = useState(''); // Adicionando estado para o nome
  const [area, setArea] = useState('');
  const [resumo, setResumo] = useState('');
  const [precoMensalidade, setPrecoMensalidade] = useState('');
  const addCurso = (curso) => {
    setCursos([...cursos, curso]);
  };

  const deletarCurso = (id) => {
    setCursos(cursos.filter(curso => curso.id !== id));
  };


  return (
    <AppContext.Provider
      value={{
        cursos,
        addCurso,
        deletarCurso,
        nome,
        area,
        resumo,
        precoMensalidade
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useAppContext = () => useContext(AppContext);
