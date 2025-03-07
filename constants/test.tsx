import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStyle from './Style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hell✪ World React Native★</Text>
      <Text style={styles.textlower}>#ITSAKHON֍</Text>
      <Text style={MyStyle.textTest}>Lorem ipsum dolor sit amet.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize:25,
  },
  textlower: {
    marginTop: 10,
    color: "black",
    fontSize:15,
  },
});
