import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link href="/users">Go to users</Link>
      <br />
      <Link href="/user/Bret">Go to Bret's page</Link>
    </div>
  );
}
