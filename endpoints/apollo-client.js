import { ApolloClient, InMemoryCache } from "@apollo/client";

const cleint = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default cleint;