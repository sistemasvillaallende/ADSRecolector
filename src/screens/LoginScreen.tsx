import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


// Obtener el ancho de la pantalla
const { width } = Dimensions.get('window');
const logoAspectRatio = 1.5; // Ajusta este valor según la proporción real de tu imagen
const logoWidth = width * 0.3; // 20% del ancho de la pantalla
const logoHeight = logoWidth / logoAspectRatio; // Calcular la altura proporcional
const buttonHeight = width * 0.15;
// Relación de aspecto del logo (ancho / alto)

type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  // Add other screen names and their param types here
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {

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
          style={{ width: logoWidth, height: logoHeight }} // Ancho y altura dinámicos
          resizeMode="contain" // Asegura que el logo mantenga su proporción
        />
        <Text style={{fontSize: 30, fontWeight: 700, marginTop: 30}}>Iniciar Sesión</Text>
        {/* Cajas de texto para usuario y contraseña */}
        <TextInput
          placeholder="Usuario"
          style={styles.input2}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.input}
        />

        {/* Botón de ingreso */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '600' }}>Ingresar</Text>
        </TouchableOpacity>

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Espacio alrededor del contenido
  },
  input: {
    width: '80%', // Ajusta el ancho de las cajas de texto
    padding: 10,
    height: 60,
    marginBottom: 20,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    backgroundColor: 'white', // Fondo blanco para los campos de entrada
  },
  input2: {
    width: '80%', // Ajusta el ancho de las cajas de texto
    padding: 10,
    height: 60,
    marginBottom: 20,
    marginTop: 50,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
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
  }
});

export default LoginScreen;
