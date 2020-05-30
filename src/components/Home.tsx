import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_ALL_USERS_QUERY = gql`
  query GET_ALL_USERS_QUERY {
    allUsers {
      id
      email
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.</p>;
  if (!data) return <p>Not Found.</p>;

  return data && data.allUsers.map((u: any) => <h2 key={u.id}>{u.email}</h2>);
};

export default Home;
