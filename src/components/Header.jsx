import React from "react";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
import { K12LEARNING, K12TEACHING, getDomainUrl } from "../config";

const initActiveState = {
	comingSoon: false,
	home: false,
	pricing: false,
	learninghub: false,
	requestdemo: false,
	teacherspayteachers: false
}

export default function Header () {
	const [openMenu, setOpenMenu] = React.useState(false);
	const [menuActive, setMenuActive] = React.useState(initActiveState);

	const handleToggleMenu = (e) => {
		let action = false;
		if (openMenu === false) {
			action = true;
		}
		setOpenMenu(action)
	}

	const handleToggleActive = (menu, e) => {
		setMenuActive({...initActiveState, [menu]: true});
		setOpenMenu(false);
		window.scroll(0,0);
	}

	return <div className="header color-bg-blue-0005">
			<nav className="nav-left">
				<button className="btn-hamburger responsive" onClick={handleToggleMenu.bind(this)}>
					<i class={`fa ${openMenu===false ? 'fa-bars': 'fa-xmark'}`}></i>
				</button>
				<Link to="/" className="logo" onClick={handleToggleActive.bind(this, 'home')}>
					<img src={logo} alt="ModelIt Logo" />
				</Link>
				<ul className={`menu ${openMenu ? 'responsive' : ''}`}>
					<li className={menuActive.home ? 'actived': ''}><Link to="/" onClick={handleToggleActive.bind(this, 'home')}>Home</Link><div className="active-bar"></div></li>
					{/* <li className={menuActive.pricing ? 'actived': ''}><Link to="/pricing" onClick={handleToggleActive.bind(this, 'pricing')}>Pricing</Link><div className="active-bar"></div></li> */}
					<li className={menuActive.learninghub ? 'actived': ''}><Link to="/learning-hub" onClick={handleToggleActive.bind(this, 'learninghub')}>Learning Hub</Link><div className="active-bar"></div></li>
					<li className={menuActive.teacherspayteachers ? 'actived': ''}><Link to="/teachers-pay-teachers" onClick={handleToggleActive.bind(this, 'teacherspayteachers')}>Teachers Pay Teachers</Link><div className="active-bar"></div></li>
					<li className={menuActive.comingSoon ? 'actived': ''}><Link to="/coming-soon" onClick={handleToggleActive.bind(this, 'comingSoon')}>Future</Link><div className="active-bar"></div></li>
					{/* <li className={menuActive.requestdemo ? 'actived': ''}><Link to="/request-demo" onClick={handleToggleActive.bind(this, 'requestdemo')}>Request Demo</Link><div className="active-bar"></div></li> */}
				</ul>
			</nav>
			<nav className="nav-right">
				<ul className="menu">
					{/* <li><a href={getDomainUrl(K12LEARNING, '?dashboard=true') } target="_self">I'm a Student</a></li> */}
					{/* <li><a href={getDomainUrl(K12TEACHING, '?dashboard=true') } target="_self">I'm a Teacher</a></li> */}
				</ul>
			</nav>
	</div>

}