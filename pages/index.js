import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'


export default function Home() {
  return (
        <>
          <header>
            <a href="#" className="logo">
              Movie Stream
            </a>
            <nav>
              <ul>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  
                    <div>
                      <h3>Thể Loai</h3>
                      <ul>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                      </ul>
                    </div>
                </li>
                <li>
                  <div>
                    <h3>Quốc Gia</h3>
                    <ul>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    <li><Link href="#"></Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="#">Phim Lẻ</Link>
                </li>
                <li>
                  <Link href="#">Phim Bộ</Link>
                </li>
                <li>
                  <Link href="#">Phim Truyền Hình</Link>
                </li>
              </ul>
            </nav>
            <div className="search">
              <input type="text" placeholder="Search..." />
              <button>Go</button>
            </div>
          </header>
        </>
      );
    }
  
