
import { StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";


export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <Botao
      Logo="game-controller"
      texto = "Jogos"
      cor = "purple"
      Logo2="ios-star-half"
      texto2="Favoritos"
      cor2="black"
      />
     </View>
  );
}
