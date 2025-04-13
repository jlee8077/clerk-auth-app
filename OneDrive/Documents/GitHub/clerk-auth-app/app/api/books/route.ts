import {NextResponse} from 'next/server';
//import fs from 'fs-extra';
import fs from 'fs';
import path from 'path';
import {Book} from '../../../types/books';
//import Home from '@/app/page';



//const filePath = path.join(process.cwd(), '../data/courses.json');
const filePath = path.join(process.cwd(), "data", "books.json");


// Helper function to read books from the JSON file
const readBooks = (): Book[] => {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData) as Book[];
  }

// GET:  GET all books
export async function GET(){
  const books = readBooks();
  return NextResponse.json(books, {status:200});
}

// Helper function to write books to the JSON file
const writeBooks = (books: Book[]) => {
    fs.writeFileSync(filePath, JSON.stringify(books), "utf-8");
};

// POST: Add a new book
export async function POST(request: Request) {
    const newBook: Book = await request.json();
    const books = readBooks();

    //newCourse.id = courses.length ? courses[courses.length - 1].id + 1 : 1;
    books.push(newBook);
    writeBooks(books);

    return NextResponse.json(newBook, { status: 201 });
}

