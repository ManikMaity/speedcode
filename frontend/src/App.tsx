
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import AppRoute from './pages/AppRoute';

function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <AppRoute/>
    </QueryClientProvider>
  )
}

export default App
