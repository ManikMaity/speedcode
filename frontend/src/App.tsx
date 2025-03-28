
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import AppRoute from './pages/AppRoute';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/sonner';

function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoute/>
      <Toaster/>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
