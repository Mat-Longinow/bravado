import React, { useEffect } from 'react';
import {Col, Layout, Row} from 'antd';
import navLogo from './../assets/nav-logo.png'
import { useHistory, Link } from "react-router-dom";
import { setCurrentNavLink } from "../util";
import discordLogo from './../assets/nav/discordLogo.png'


const { Header } = Layout;

const Nav = () => {
	let history = useHistory()
	const discordLink = 'https://discord.gg/kJ4dsnQJBy'

	useEffect(() => {
		setCurrentNavLink()
	}, [])

	return (
		<Header id="navbar">
			<img className="logo" src={navLogo} />

			<Row>
				<Col>
					<div className="menu-item">
						<Link to="/">
							<span id="home">Home</span>
						</Link>
					</div>

					<div className="menu-item">
						<Link to="/guild-charter">
							<span id="guildCharter">Guild Charter</span>
						</Link>
					</div>

					{/*<div className="menu-item">*/}
					{/*	<div className="submenu">*/}
					{/*		<div className="submenu-link">Tools</div>*/}

					{/*		<div className="dropdown-content">*/}
					{/*			<Link to='/loot-split'>*/}
					{/*				<span id="lootSplit">Loot Split Calculator</span></Link>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</div>*/}

					<div className="menu-item">
						<a href={discordLink}>
							<img src={discordLogo}/>
						</a>
					</div>
				</Col>
			</Row>
		</Header>
	);
};

export default Nav
