import React, { FC, PropsWithChildren } from 'react'
import { Button, Modal, StyleSheet, View } from 'react-native'

export const Dialog: FC<DialogProps> = ({ children, onClose }) => {
    return (
        <Modal
            visible={true}
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    {children}
                </View>
                <Button title="Close Modal" onPress={onClose} />
            </View>
        </Modal>
    )
}

export interface DialogProps extends PropsWithChildren {
    onClose?: () => void,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
