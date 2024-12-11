import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Todos } from "./components/Todos";

const queryClient = new QueryClient();

//all of this bc need to use query hooks ... wtw
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>TODOs</h1>
        <Todos />
      </QueryClientProvider>
    </>
  );
}

export default App;
