import InfoCards from "@/components/InfoCards";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://simple-books-api.glitch.me/books"); //server side fetching use client will not work here
  const booksData = await response.json();

  const mappedbooks = booksData.map((item) => item.name);
  console.log("Books Name Map: ", mappedbooks.name);

  return (
    <div>
      <h1>SIMPLE BOOKS API</h1>
      {booksData.map((book, index) => {
        return (
                    <Link href={`/products/${book.id}`}>
            <p>{book.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
