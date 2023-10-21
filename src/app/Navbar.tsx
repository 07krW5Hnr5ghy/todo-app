'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { GrTasks } from 'react-icons/gr';

const Navbar = () => {
    const currentPath = usePathname();
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Tasks', href: '/tasks' },
    ];
    return (
        <nav className="flex space-x-5 border-b mb-5 px-5 h-14 items-center">
            <Link href="/"><GrTasks /></Link>
            <ul className="flex space-x-5">
                {links.map((link, index) =>
                    <li key={index} className={classNames({
                        "text-zinc-700": link.href === currentPath,
                        "text-zinc-500": link.href !== currentPath,
                        "hover:text-zinc-900 transition-colors": true
                    })}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>)}
            </ul>
        </nav>
    )
}

export default Navbar