import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#14171F',
  },
  cardContainer: {
    paddingTop: 64,
    width: '100%',
    minHeight: 750,
  },
  tagsContainer: {
    flexDirection: 'row', 
    marginHorizontal: 32,
    width: '100%',
    marginTop: 12,
  },
  title: {
    color: 'white',
    letterSpacing: 1.5,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  content: {
    color: 'white',
    letterSpacing: 1.5,
    fontSize: 16,
    fontWeight: '300',
  },
  sectionContainer: {
    marginLeft: 32,
    marginVertical: 16,
    flex: 1,
  },
  buttonContainer: {
    margin: 32,
  }
})