import Link from "next/link"

function Header () {
    return (
        <div>
        <ul className="flex bg-blue-600 p-4 text-white font-bold gap-32">
                 <Link href="/"> Home Page </Link>
          <Link href="/about"> About </Link>
          <Link href="/contactus"> Contact Us </Link>
          <Link href="/career" > Career </Link>
          
        
        </ul>
      </div>
    )
}

export default Header;