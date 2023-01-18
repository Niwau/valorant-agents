import { useContext } from 'react'
import { Image, ActivityIndicator, ScrollView } from 'react-native'
import { NavGroup } from '../../components/molecules/NavGroup/NavGroup';
import { AgentsContext } from '../../contexts/AgentsContext';
import { CardList } from '../../components/organisms/CardList/CardList';
import { styles } from './styles';

export const Home = () => {

  const { isLoaded } = useContext(AgentsContext)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../../assets/valorant-logo.png')}/>
      <NavGroup/>
      { !isLoaded ? <ActivityIndicator/> : <CardList/> }
    </ScrollView>
  )
}