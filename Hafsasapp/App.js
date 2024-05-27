import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= { styles.fontchange}>
        My name is <Text style={style.fontBolden}> Hafsa Abdul Karim </Text>
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontchange:{
    fontSize:24
  },
fontBolden:{
  fontWeight: 'bold'
}
});
