import { useState } from "react";

export default function User({ users, params }) {
  const [user, setUser] = useState(
    users.find((u) => u.username === params.username)
  );
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => `/user/${user.username}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
      params,
    },
  };
}
