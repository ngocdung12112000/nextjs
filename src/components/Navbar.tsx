'use client';
import Link from 'next/link';
import React from 'react';
import { signOut } from "next-auth/react";

export default function Navbar() {
	const [searchValue, setSearchValue] = React.useState('');

	React.useEffect(() => {
		const searchTrigger = document.querySelector('.search-trigger');
		const searchWrap = document.querySelector('.search-wrap');
		const handleSearchClick = () => {
			document.body.classList.add('search-visible');
		};

		if (searchTrigger) {
			searchTrigger.addEventListener('click', handleSearchClick);
		}
		if (searchWrap) {
			searchWrap.addEventListener('click', (event) => {
				const target = event.target as HTMLElement;
				if (!target.closest('.search-form')) {
					document.body.classList.remove('search-visible');
				}
			})
		}

		// Cleanup event listener on component unmount
		return () => {
			if (searchTrigger) {
				searchTrigger.removeEventListener('click', handleSearchClick);
			}
		};
	}, []);

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
							<Link href="/blog" title="">Blog</Link>
							<ul className="sub-menu">
								<li><Link href="/blog/video-post">Video Post</Link></li>
								<li><Link href="/blog/audio-post">Audio Post</Link></li>
								<li><Link href="/blog/gallery-post">Gallery Post</Link></li>
								<li><Link href="/blog/standard-post">Standard Post</Link></li>
							</ul>
						</li>
						<li><Link href="/styles" title="">Styles</Link></li>
						<li><Link href="/about" title="">About</Link></li>
						<li><Link href="/contact" title="">Contact</Link></li>
					</ul>
					{/* <div>
						<button
							onClick={() => signOut()}
						>
							Sign Out
						</button>
					</div> */}
				</nav>
				<div className="search-wrap">
					<form role="search" method="get" className="search-form" action="#">
						<label>
							<span className="hide-content">Search for:</span>
							<input
								onChange={e => setSearchValue(e.target.value)}
								type="search"
								className="search-field"
								placeholder="Type Your Keywords"
								value={searchValue}
								name="s"
								title="Search for:"
							/>
						</label>
						<input type="submit" className="search-submit" value="Search" />
					</form>
					<a href="#" id="close-search" className="close-btn">Close</a>
				</div>
				<div className="triggers">
					<div className="search-trigger"><i className="fa fa-search"></i></div>
					<a className="menu-toggle" href="#"><span>Menu</span></a>
				</div>
			</div>
			
		</header>
	);
}
