import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { router } from "./router";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    }
  }
});
function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
