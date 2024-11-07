import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Button, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
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
  Login: undefined;
  QRScreen: undefined;
  // Add other screen names and their param types here
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
interface Props {
  navigation: LoginScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <ImageBackground
      source={require('../assets/fondo.png')} // Ruta de tu imagen de fondo
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.contentContainer}>
        {/* Logo con ancho del 20% de la pantalla y altura proporcional */}
        <Text style={styles.titulo}>Historial de Descargas</Text>
        <Text style={styles.txtFiltro}>Desde: 01-10-2024 Hasta: 31-10-2024</Text>
        <View style={styles.line} />
        <ScrollView style={{ marginLeft: 0, paddingLeft: 0, height: '80%', width: '100%' }}>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
          <Text style={styles.txtFecha}>01-10-2024 10:45am</Text>
          <Text style={styles.txtLugar}>Centro de Reciclaje Onda Verde</Text>
        </ScrollView>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%', // Asegura que la imagen de fondo cubra el ancho de la pantalla
  },
  line: {
    borderBottomColor: 'gray', // Color de la línea
    borderBottomWidth: 1, // Grosor de la línea
    marginVertical: 10, // Espacio superior e inferior
    width: '100%',
    marginBottom: 20
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Espacio alrededor del contenido
    paddingTop: 100,
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
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#303940",
  },
  buttonText: {
    color: "#fff",
  },
  titulo: {
    fontSize: 24,
    textAlign: 'left',
    fontWeight: '700',
    width: '100%',
  },
  txtFiltro: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '600',
    width: '100%',
    marginTop: 10,
    marginBottom: 0,
  },
  txtLugar: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '600',
    width: '100%',
    marginTop: 10,
  },
  txtFecha: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '400',
    width: '100%',
    marginTop: 5,
  }
});

export default HomeScreen;
