import * as React from 'react';
import { View, TextInput } from 'react-native';
import { Avatar, Button, Card, Divider, IconButton, Menu } from 'react-native-paper';
import ModalDetalhes from './modalDetalhes';
import { AppProvider, useAppContext } from './provider';

export default function ItemCurso({ curso }) {
    const { deletarCurso } = useAppContext();
    const [visibleModal, setVisibleModal] = React.useState(false);
    const [visibleMenu, setVisibleMenu] = React.useState(false);
    const [text, setText] = React.useState('');

    const openModal = () => setVisibleModal(true);
    const closeModal = () => setVisibleModal(false);

    const openMenu = () => setVisibleMenu(true);
    const closeMenu = () => setVisibleMenu(false);

    return (
        <View>
            <View>
                <Card>
                    <Card.Title
                        title={curso.nome}
                        subtitle={curso.resumo}
                        left={(props) => <Avatar.Icon {...props} icon="school" />}
                        right={(props) => <IconButton {...props} icon="delete" onPress={deletarCurso} />}
                    />
                    <Button onPress={openModal}>Mais</Button>
                </Card>
            </View>
            
            <ModalDetalhes curso={curso} visibleModal={visibleModal} closeModal={closeModal} />
        </View>
    );
}
