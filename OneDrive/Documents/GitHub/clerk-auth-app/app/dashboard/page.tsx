//import Image from "next/image";
import React from "react";
import { FC } from "react";
//import Link from "next/link";
//import { Http2ServerResponse } from "http2";
//import {Book} from '../../.next/types/book';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




interface Book{
  "title": string;
  "authors": string;
  "publisher": string;
  "publication-date": string;
  "ISBN": string;
  "category": string;
}

async function fetchBooks():Promise<Book[]> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  //const baseUrl = process.env.;
  //const baseUrl = "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/books`, {cache: "no-store"});

  return res.json()
}


const Home: FC = async () => { 

  const booklist = await fetchBooks();
  
  return (
    <>
    <div>
      <main>
        <div>
          <h1>Here are some of the book titles in the store:</h1>     
        </div>
        <div className="grid grid-cols-3 gap-8">
        {booklist.map(booklist=>(
        <Card key={booklist.ISBN}>
            <CardHeader>
              <CardTitle>{booklist.title}</CardTitle>
              <CardDescription>Category: {booklist.category}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Authored by {booklist.authors}</p>
                <p>Published by {booklist.publisher}, {booklist["publication-date"]}</p>
                <p>ISBN {booklist.ISBN}</p>
            </CardContent>        
        </Card>
        ))}
        </div>
      </main>

    </div>
    </>
    
    
  );
}


export default Home;