import { AgentsContextProvider } from './src/contexts/AgentsContext';
import { Home } from './src/screens/Home/Home';

export default function App() {
  return (
    <AgentsContextProvider>
      <Home/>
    </AgentsContextProvider>
  );
}