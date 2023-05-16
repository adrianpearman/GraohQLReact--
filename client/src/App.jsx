// NPM Modules
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import Naviagtion from "./components/Navigation";

// ApolloClient
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: import.meta.env.DEV ? "http://localhost:4000/graphql" : "/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <Naviagtion />

          <Routes>
            <Route path="/" element={<Launches />} />
            <Route path="/launch/:flight_number" element={<Launch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
