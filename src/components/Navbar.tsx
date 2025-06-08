'use client';
import Link from 'next/link';

export default function Navbar() {

  return (
	<header className="short-header">

		<div className="gradient-block"></div>

		<div className="row header-content">
			<div className="logo">
				<a href="/">Author</a>
			</div>

			<nav id="main-nav-wrap">
				<ul className="main-navigation sf-menu">
					<li className="current"><Link href="/" title="">Home</Link></li>									
					<li className="has-children">
						<Link href="/category" title="">Categories</Link>
						<ul className="sub-menu">
						<li><Link href="/category">Wordpress</Link></li>
						<li><Link href="/category">HTML</Link></li>
						<li><Link href="/category">Photography</Link></li>
						<li><Link href="/category">UI</Link></li>
						<li><Link href="/category">Mockups</Link></li>
						<li><Link href="/category">Branding</Link></li>
						</ul>
					</li>
					<li className="has-children">
						<Link href="/" title="">Blog</Link>
						<ul className="sub-menu">
						<li><Link href="/">Video Post</Link></li>
						<li><Link href="/">Audio Post</Link></li>
						<li><Link href="/">Gallery Post</Link></li>
						<li><Link href="/">Standard Post</Link></li>
						</ul>
					</li>
					<li><Link href="/" title="">Styles</Link></li>
					<li><Link href="/about" title="">About</Link></li>	
					<li><Link href="/" title="">Contact</Link></li>										
				</ul>
			</nav>
		</div>
	</header>
  );
}
