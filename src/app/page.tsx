'use client'
import { useRouter}from 'next/navigation';
import Link from "next/link";
export default function Home(){ 
  const rout = useRouter(); 
  return(
    <div>
      <h1><big>This is a Router Home page from</big> <strong> Ghulam Muneer Uddin</strong></h1>
      <h1>This is a next.js project</h1>
      <ul>
      <li><Link href={'/'}> Home </Link></li>
      <li><Link href='about'> About </Link></li>
      <li><Link href='contact'> Contact </Link></li>
      <li><Link href='Footer'> Footer </Link></li>
      <li><Link href='navbar'> Navbar </Link></li>
      </ul>
        <button onClick={() =>rout.push('/about')}> Click on About </button>
        <br />
        <button onClick={() =>rout.push('/contact')}> Click on Contact </button>
        <br />
        <button onClick={() =>rout.push('/footer')}> Click on Footer </button>
        <br />
        <button onClick={() =>rout.push('/navbar')}> Click on Navbar </button>
    </div>
  );
}
