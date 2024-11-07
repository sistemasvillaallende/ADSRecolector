import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, Modal, Button } from 'react-native';
import QRScanner from '../components/QRScanner'; // Asegúrate de la ruta correcta
import { StackNavigationProp } from '@react-navigation/stack';
// Obtener el ancho de la pantalla
const { width } = Dimensions.get('window');
const logoAspectRatio = 1.5; // Ajusta este valor según la proporción real de tu imagen
const logoWidth = width * 0.3; // 20% del ancho de la pantalla
const logoHeight = logoWidth / logoAspectRatio; // Calcular la altura proporcional
const buttonHeight = width * 0.15;
// Relación de aspecto del logo (ancho / alto)
const qrWidth = width * 0.7; // 20% del ancho de la pantalla
type RootStackParamList = {
    HomeScreen: undefined;
    Main: undefined;
    // Add other screen names and their param types here
};
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
interface Props {
    navigation: LoginScreenNavigationProp;
}


const QRScreen: React.FC<Props> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState<string | null>(null);
    function handleScanComplete(data: string): void {
        setModalData(data); // Guarda los datos escaneados en el estado
        setModalVisible(true); // Abre el modal
    }

    return (

        <ImageBackground
            source={require('../assets/fondooscuro.png')} // Ruta de tu imagen de fondo
            style={styles.background}
            resizeMode="cover"
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Datos escaneados:</Text>
                        <Text style={styles.modalText}>{modalData}</Text>
                        <TouchableOpacity style={styles.btnProcesar}
                            onPress={() => navigation.navigate('Main')}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '600', color: 'black' }}>Procesar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    {/* Logo con ancho del 20% de la pantalla y altura proporcional */}
                    <Image
                        source={require('../assets/logo.png')} // Ruta de tu logo
                        style={{ width: qrWidth, height: logoHeight, marginTop: 70 }} // Ancho y altura dinámicos
                        resizeMode="contain" // Asegura que el logo mantenga su proporción
                    />
                    <Text style={styles.textLabel}>Juan Perez</Text>
                    <Text style={styles.textLabel2}>Estado: Recolección en curso</Text>
                    <Text style={styles.textLabel3}>Último Punto: Calle Faisa 456</Text>


                </View>
                {/* Otros componentes o vistas */}
                <View style={styles.camera}>
                    <QRScanner onScanComplete={handleScanComplete} />
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '600', color: 'white' }}>Volver</Text>
                </TouchableOpacity>
                {/* Otros componentes o vistas */}
            </View>
        </ImageBackground>
    );

};
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%', // Asegura que la imagen de fondo cubra el ancho de la pantalla
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        textAlign:'center',
        justifyContent:'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
    textLabel2: {
        marginTop: 10, // Espacio entre el logo y la etiqueta de texto
        fontSize: 20, // Tamaño de fuente de la etiqueta
        color: 'white', // Color de la fuente (puedes cambiarlo según tu diseño)
        textAlign: 'center', // Centrar el texto
        fontWeight: '400',
    },
    textLabel3: {
        marginTop: 5, // Espacio entre el logo y la etiqueta de texto
        fontSize: 20, // Tamaño de fuente de la etiqueta
        color: 'white', // Color de la fuente (puedes cambiarlo según tu diseño)
        textAlign: 'center', // Centrar el texto
        fontWeight: '400',
        marginBottom: 0,
    },
    textLabel: {
        marginTop: 30, // Espacio entre el logo y la etiqueta de texto
        fontSize: 24, // Tamaño de fuente de la etiqueta
        color: 'white', // Color de la fuente (puedes cambiarlo según tu diseño)
        textAlign: 'center', // Centrar el texto
        fontWeight: '600',
    },
    container: {
        flex: 1,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center',     // Centra horizontalmente
        padding: 0,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '65%'
    },
    btn: {
        marginTop: 0,
        height: buttonHeight,
        width: '80%',
        marginLeft: '10%',
        backgroundColor: 'transparent',
        borderRadius: 50,
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
        marginBottom: 40,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: 'white',
        position: 'absolute',
        bottom: '12%',
        color: 'white'
    },
    btnProcesar: {
        marginTop: 20,
        height: buttonHeight,
        width: '80%',
        marginLeft: '10%',
        backgroundColor: 'transparent',
        borderRadius: 50,
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
        marginBottom: 20,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: 'black',
        color: 'black'
    },
    camera: {
        width: '80%',  // 90% del ancho de la pantalla
        height: '30%', // 50% de la altura de la pantalla
        position: 'absolute',
        top: '40%',
        borderRadius: 15,
    },
});
export default QRScreen;

