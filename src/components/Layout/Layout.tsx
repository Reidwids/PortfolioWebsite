import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

export default function Layout() {
	console.log('Width: ', window.innerWidth);
	console.log('Height: ', window.innerHeight);

	return (
		<div className="App">
			<Sidebar></Sidebar>
			<div className="page">
				<span className="tags top-tags">&lt;body&gt;</span>
				<Outlet></Outlet>
				<span className="tags bottom-tags">
					&lt;/body&gt;
					<br></br>
					<span className="bottom-tag-html">&lt;/html&gt;</span>
				</span>
			</div>
		</div>
	);
}
