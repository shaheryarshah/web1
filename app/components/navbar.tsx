import Link from 'next/link';
export default function Navbar (){
    return (
        <div className="flex justify-around bg-blue-500">
            <h1 className="text-2xl text-red-500 font-bold">
            
                
            </h1>
            <h2>
                <ul className="flex gap-x-20" >
                <li className="text-red-500"><Link href="./">home</Link>
                   
                    </li>
                    <li>
                    <Link href="./contactus">contactus</Link>
                    </li>
                    <li > <Link href="./about">about</Link>
                    
                    </li>                
                </ul>
            </h2>
        </div>
    )
}
