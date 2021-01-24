import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import logo from "./assets/spacex.jpg";
import Launches from "./components/Launches";
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="spacex_logo"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <h1 className="display-4 my-3">Launches</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
