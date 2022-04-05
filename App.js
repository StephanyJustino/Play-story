
import { FlatList, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import JOGOS from "./dados/componentes/jogos";
import Jogos from "./dados/componentes/componente";

export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
        <Cabecalho></Cabecalho>
        <Botao
        Logo="game-controller"
        texto = "Jogos"
        cor = "black"
        Logo2="ios-star-half"
        texto2="Favoritos"
        cor2="purple"
        />
      <Botao
        Logo="play-sharp"
        texto="Filmes"
        cor="green"
        Logo2="musical-notes"
        texto2 = "Musicas"
        cor2 = "orange"
        
      />
      <Botao
      Logo="book-outline"
      texto="Filmes"
      cor="blue"
      Logo2="newspaper-outline"
      texto2 = "Noticias"
      cor2 = "red"
      />

      <View>
        <FlatList
        horizontal={true}
        data = {JOGOS}
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
