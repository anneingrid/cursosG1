import * as React from 'react';
import { Modal, Text, Button } from 'react-native-paper';
import { View } from 'react-native';

export default function ModalDetalhes({ curso, visibleModal, closeModal }) {

    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Modal visible={visibleModal} onDismiss={closeModal} contentContainerStyle={containerStyle}>
            <View style={{ flex: 1 }}>
                <Text>Nome: {curso.nome}</Text>
                <Text>Área: {curso.area}</Text>
                <Text>Resumo: {curso.resumo}</Text>
                <Text>Preço da Mensalidade: R$ {curso.precoMensalidade}</Text>
                <Button icon="close" mode="contained" onPress={closeModal}>
                    Fechar
                </Button>
            </View>
        </Modal>
    );
}
