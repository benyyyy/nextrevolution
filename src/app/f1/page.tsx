import Link from "next/link";


export default function FirstPage() {
  return (
    <>
    <div>
      First Page 
    </div>
    <Link className="bg-green-200" href="/f1/f2">Link to F2 page </Link>
    <Link className="bg-red-300" href="/f3">Link to F3</Link>
    </>
  )
}
