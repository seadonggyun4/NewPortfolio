import module from '@/layout/header.module.css'
import Link from "next/link";


export default function Header() {
  return (
    <header className={module.header}>
        <h1 className={module.title}>
          <Link href="/">Donggyun Portfolio</Link>
        </h1>
        <ul className={module.menuList}>
          <li>
              <Link href="#profile">profile</Link>
          </li>
          <li>
              <Link href="#tech-skill">tech-skill</Link>
          </li>
          <li>
              <Link href="#toy-project">toy-project</Link>
          </li>
        </ul>
    </header>
  );
}
