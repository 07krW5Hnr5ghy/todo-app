import Link from 'next/link'
import { GrTasks } from 'react-icons/gr'

const Navbar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Tasks', href: '/tasks' },
    ];
    return (
        <nav className="flex space-x-5 border-b mb-5 px-5 h-14 items-center">
            <Link href="/"><GrTasks /></Link>
            <ul className="flex space-x-5">
                {links.map((link, index) =>
                    <li key={index} className="text-zinc-600 hover:text-zinc-800 transition-colors">
                        <Link href={link.href}>{link.label}</Link>
                    </li>)}
            </ul>
        </nav>
    )
}

export default Navbar