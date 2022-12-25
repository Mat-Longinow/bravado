import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import navLogo from './../assets/nav-logo.png'
import { useHistory } from "react-router-dom";
import { routesSearch } from "../util";
import DiscordLogo from "./discordLogo";

const { Header, Content, Footer } = Layout;

const Nav = () => {
	let history = useHistory()
	const discordLink = 'https://discord.gg/kJ4dsnQJBy'

	const getCurrentNavLink = () => {
		switch (window.location.pathname) {
			case '/':
				return 'home'
			case '/guild-charter':
				return 'guildCharter'
		}
	}

	const currentNavLink: any = getCurrentNavLink()

	const menuItems = [
		{
			label: 'Home',
			key: 'home'
		},
		{
			label: 'Guild Charter',
			key: 'guildCharter'
		},
		{
			label: '',
			key: 'discord',
			icon: <DiscordLogo />
		},
	]

	return (
			<Header id="navbar">
				<img className="logo" src={navLogo} />

				<Menu
					onClick={(e) => {
						if(e.key === 'discord') {
							window.location.href = discordLink
						}

						const route: any = routesSearch(e.key)

						history.push(route)
					}}
					selectedKeys={[currentNavLink]}
					mode="horizontal"
					items={menuItems}
				/>
			</Header>
	);
};

export default Nav
