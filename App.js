import * as React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ItemCurso from './components/itemCurso';
import { AppProvider, useAppContext } from './components/provider';
// import { View, TextInput } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider> {/* Envolve o componente AppProvider */}
        <AppComponent />
      </AppProvider>
    </SafeAreaProvider>
  );
}

function AppComponent() {
  const { addCurso } = useAppContext(); // Extrai a função addCurso do contexto
  const [nomeInput, setNomeInput] = React.useState('');
  const [areaInput, setAreaInput] = React.useState('');
  const [resumoInput, setResumoInput] = React.useState('');
  const [precoMensalidadeInput, setPrecoMensalidadeInput] = React.useState('');

  const handleAddCurso = () => {
    const novoCurso = {
      id: Math.random().toString(),
      nome: nomeInput,
      area: areaInput,
      resumo: resumoInput,
      precoMensalidade: parseFloat(precoMensalidadeInput)
    };
    addCurso(novoCurso);
    setNomeInput('');
    setAreaInput('');
    setResumoInput('');
    setPrecoMensalidadeInput('');
  };

  return (
    <SafeAreaView>
      <TextInput
        label="Nome"
        value={nomeInput}
        onChangeText={setNomeInput}
      />
      <TextInput
        label="Área"
        value={areaInput}
        onChangeText={setAreaInput}
      />
      <TextInput
        label="Resumo"
        value={resumoInput}
        onChangeText={setResumoInput}
      />
      <TextInput
        label="Preço da Mensalidade"
        value={precoMensalidadeInput}
        onChangeText={setPrecoMensalidadeInput}
      />
      <Button icon="plus" mode="contained" onPress={handleAddCurso}>
                    Adicionar
                </Button>
      <ListaCursos />
    </SafeAreaView>
  );
}

function ListaCursos() {
  const { cursos, deletarCurso } = useAppContext();
  return cursos.map(curso => (
    <ItemCurso key={curso.id} curso={curso} deletarCurso={deletarCurso} />
  ));
}
