import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, Modal, Button } from 'react-native';
import QRScanner from '../components/QRScanner'; // Asegúrate de la ruta correcta
import { StackNavigationProp } from '@react-navigation/stack';
import QRCode from 'react-native-qrcode-svg';




// Obtener el ancho de la pantalla
const { width } = Dimensions.get('window');
const logoAspectRatio = 1.5; // Ajusta este valor según la proporción real de tu imagen
const logoWidth = width * 0.3; // 20% del ancho de la pantalla
const logoHeight = logoWidth / logoAspectRatio; // Calcular la altura proporcional
const buttonHeight = width * 0.15;
// Relación de aspecto del logo (ancho / alto)
const qrWidth = width * 0.57; // 20% del ancho de la pantalla
const qrWidth2 = width * 0.52; // 20% del ancho de la pantalla
type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  // Add other screen names and their param types here
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
interface Props {
  navigation: LoginScreenNavigationProp;
}


const QRDisplayScreen: React.FC<Props> = ({ navigation }) => {
const [showComponentA, setShowComponentA] = useState(true);
const [showComponentB, setShowComponentB] = useState(false);
  return (

    <ImageBackground
      source={require('../assets/fondo.png')} // Ruta de tu imagen de fondo
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.contentContainer}>
        {/* Logo con ancho del 20% de la pantalla y altura proporcional */}
        <Image
          source={require('../assets/logo.png')} // Ruta de tu logo
          style={{ width: qrWidth, height: logoHeight, marginTop: 120 }} // Ancho y altura dinámicos
          resizeMode="contain" // Asegura que el logo mantenga su proporción
        />
        <Text style={styles.textLabel}>Juan Perez</Text>
        <Text style={styles.textLabel2}>Estado: Recolección en curso</Text>
        <Text style={styles.textLabel3}>Último Punto: Calle Faisa 456</Text>
        {showComponentA && (
          <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
            <Image
              source={require('../assets/qrscanner.png')} // Ruta de tu logo
              style={{ width: qrWidth, }} // Ancho y altura dinámicos
              resizeMode="contain" // Asegura que el logo mantenga su proporción
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setShowComponentB(true);
                setShowComponentA(false);
              }}
            >
              <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '600' }}>Generar QR</Text>
            </TouchableOpacity>
          </View>
        )}
        {showComponentB && (
          <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
            <QRCode
              value="https://example.com" // El contenido del QR (puede ser un enlace o texto)
              size={qrWidth2} // Tamaño del código QR
              color="black" // Color del código QR
              backgroundColor="white"  // Color de fondo del QR
            />

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setShowComponentB(false);
                setShowComponentA(true);
              }}
            >
              <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '600' }}>Volver</Text>
            </TouchableOpacity>
          </View>
        )}

      </View>
    </ImageBackground>
  );

};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%', // Asegura que la imagen de fondo cubra el ancho de la pantalla
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Espacio alrededor del contenido
  },
  textLabel: {
    marginTop: 50, // Espacio entre el logo y la etiqueta de texto
    fontSize: 24, // Tamaño de fuente de la etiqueta
    color: 'black', // Color de la fuente (puedes cambiarlo según tu diseño)
    textAlign: 'center', // Centrar el texto
    fontWeight: '600',
  },
  textLabel2: {
    marginTop: 10, // Espacio entre el logo y la etiqueta de texto
    fontSize: 20, // Tamaño de fuente de la etiqueta
    color: 'black', // Color de la fuente (puedes cambiarlo según tu diseño)
    textAlign: 'center', // Centrar el texto
    fontWeight: '400',
  },
  textLabel3: {
    marginTop: 5, // Espacio entre el logo y la etiqueta de texto
    fontSize: 20, // Tamaño de fuente de la etiqueta
    color: 'black', // Color de la fuente (puedes cambiarlo según tu diseño)
    textAlign: 'center', // Centrar el texto
    fontWeight: '400',
    marginBottom: 30,
  },
  input: {
    width: '80%', // Ajusta el ancho de las cajas de texto
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white', // Fondo blanco para los campos de entrada
  },
  input2: {
    width: '80%', // Ajusta el ancho de las cajas de texto
    padding: 10,
    marginBottom: 20,
    marginTop: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white', // Fondo blanco para los campos de entrada
  },
  btn: {
    marginTop: 40,
    height: buttonHeight,
    width: '80%',
    backgroundColor: '#60d07975',
    borderRadius: 50,
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  helpTextWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  helpText: {
    color: "#fff",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#303940",
  },
  buttonText: {
    color: "#fff",
  },



  scannerView: {
    width: 220,
    height: 220,
  },
  borderTopLeft: {
    position: "absolute",
    borderColor: "#fff",
    width: 55,
    height: 55,
    top: 0,
    left: 0,
    borderTopLeftRadius: 35,
    borderTopWidth: 10,
    borderLeftWidth: 10,
  },
  borderTopRight: {
    position: "absolute",
    borderColor: "#fff",
    width: 55,
    height: 55,
    top: 0,
    right: 0,
    borderTopRightRadius: 35,
    borderTopWidth: 10,
    borderRightWidth: 10,
  },
  borderBottomLeft: {
    position: "absolute",
    borderColor: "#fff",
    width: 55,
    height: 55,
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 35,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
  },
  borderBottomRight: {
    position: "absolute",
    borderColor: "#fff",
    width: 55,
    height: 55,
    bottom: 0,
    right: 0,
    borderBottomRightRadius: 35,
    borderBottomWidth: 10,
    borderRightWidth: 10,
  },

});

export default QRDisplayScreen;
