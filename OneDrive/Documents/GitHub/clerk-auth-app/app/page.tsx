import Image from "next/image";
import { Button } from "@/components/ui/button"
//import { Link } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
//import Link from "next/Link";



export default function Home() {
  return (
    
    <>
    
    <main className="flex items-center">
      
    
    <div>
    <Image src={"/library_books.jpg"} alt="" width={500} height={500}/>
    </div>
    <div> 
      <Link href="/dashboard">    
      <Button>Click here to look at some of the offerings</Button></Link>
    </div>

      
      </main>
      <footer></footer>
    
    </>
  
  );
}
