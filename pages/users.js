import { useEffect } from "react";
import Link from "next/link";

export default function Users({ users }) {
  useEffect(() => {
    console.log(users);
  });

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <Link href={`/user/${user.username}`}>Go to user page</Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
