import Link from "next/link";

export default function Home() {
  return (
    <div >
      Hello next js

      <br />
      <br />
      <Link href="/posts">Posts</Link>
    </div>
  );
}
