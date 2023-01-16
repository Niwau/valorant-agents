import React, { useContext, useCallback } from 'react'
import { ScrollView, TouchableWithoutFeedback, Text, StyleSheet, View } from 'react-native'
import { AgentsContext } from '../../contexts/AgentsContext'
import { Role } from '../../types/Role'


export const Nav = () => {

  const { setSelectedRole, selectedRole } = useContext(AgentsContext)

  const changeNavColorByRole = useCallback((role: Role) => {
    return selectedRole == role ? styles.navTextActive : styles.navTextInactive
  }, [selectedRole])

  return (
    <View>
      <ScrollView horizontal contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={() => setSelectedRole('Duelista')}>
          <Text style={changeNavColorByRole('Duelista')}>DUELISTA</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setSelectedRole('Controlador')}>
          <Text style={changeNavColorByRole('Controlador')}>CONTROLADOR</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setSelectedRole('Iniciador')}>
          <Text style={changeNavColorByRole('Iniciador')}>INICIADOR</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setSelectedRole('Sentinela')}>
          <Text style={changeNavColorByRole('Sentinela')}>SENTINELA</Text>
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
  navTextActive: {
    marginRight: 16,
    fontSize: 16,
    color: 'white',
    letterSpacing: 3
  },
  navTextInactive: {
    marginRight: 16,
    fontSize: 16,
    color: 'white',
    letterSpacing: 3,
    opacity: 0.6,
  }
})