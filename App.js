import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styleText}>Hola mundo!</Text>
      <Text style={styles.styleText}>Mi nombre es Rodrigo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;