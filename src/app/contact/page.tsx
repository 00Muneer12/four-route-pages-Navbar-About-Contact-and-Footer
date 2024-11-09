import Link from "next/link";
export default function Header(){
   return(
     <div>
       <h1><big>This is a Contact page from</big> <strong> Ghulam Muneer Uddin</strong></h1>
       <p><span>This is a next.js project</span></p>
       <ul>
      <li><Link href={'/'}> Home </Link></li>
      <li><Link href='about'> About </Link></li>
      <li><Link href='contact'> Contact </Link></li>
      <li><Link href='Footer'> Footer </Link></li>
      <li><Link href='navbar'> Navbar </Link></li>

      </ul>
     </div>
   );
 }
