
import { FlatList, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Dados from "./dados/componentes/componente/dadosJogos";
import Jogos from "./dados/Jogos";

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
      <View>
        <FlatList
        horizontal={true}
        data = {Dados}
        keyExtractor = {(item) => item.id}
        renderItem = { ({ item }) => (
          <Jogos
          titulo= {item.nome}
          imagem= {item.imagem}
          valor= {item.valor}
          />
        )}
        />
      </View>
     </View>
  );
}
