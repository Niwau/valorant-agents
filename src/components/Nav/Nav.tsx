import React from 'react'
import { ScrollView, TouchableWithoutFeedback, Text, StyleSheet, View } from 'react-native'

export const Nav = () => {
  return (
    <View>
      <ScrollView horizontal contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <Text style={styles.navText}>DUELISTA</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={styles.navTextInactive}>CONTROLADOR</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={styles.navTextInactive}>INICIADOR</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={styles.navTextInactive}>SENTINELA</Text>
        </TouchableWithoutFeedback>  
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom: 0,
  },
  navText: {
    marginRight: 16,
    fontSize: 20,
    color: 'white',
    letterSpacing: 3
  },
  navTextInactive: {
    marginRight: 16,
    fontSize: 20,
    color: 'white',
    letterSpacing: 3,
    opacity: 0.6,
  }
})