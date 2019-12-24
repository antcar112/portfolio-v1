import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import {
	IoMdFolder,
	IoMdMail,
	IoMdPerson,
	IoMdSunny,
	IoMdMoon,
} from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import DrawerNavLink from './DrawerNavLink';
import DrawerLinkInfo from './DrawerLinkInfo';

const NavList = styled.ul`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const DrawerList = ({ colorTheme, toggleTheme, setDrawerOpen }) => {
	const handleDarkMode = () => {
		toggleTheme();
		setDrawerOpen();
	};
	return (
		<NavList>
			<DrawerNavLink>
				<AniLink
					to="/"
					cover
					direction="right"
					bg="#0F97DB"
					duration={0.8}
					activeClassName="nav_drawer_link--active"
				>
					<DrawerLinkInfo name="Work" icon={<IoMdFolder />} />
				</AniLink>
			</DrawerNavLink>
			<DrawerNavLink>
				<AniLink
					to="/about/"
					cover
					direction="left"
					bg="#0F97DB"
					duration={0.8}
					activeClassName="nav_drawer_link--active"
				>
					<DrawerLinkInfo name="About" icon={<IoMdPerson />} />
				</AniLink>
			</DrawerNavLink>
			<DrawerNavLink>
				<a href="mailto:anthony.j.caron@gmail.com">
					<DrawerLinkInfo name="Contact" icon={<IoMdMail />} />
				</a>
			</DrawerNavLink>
			<DrawerNavLink>
				<a
					href="https://github.com/antcar112"
					target="_blank"
					rel="noopener noreferrer"
				>
					<DrawerLinkInfo name="GitHub" icon={<FaGithub />} />
				</a>
			</DrawerNavLink>
			<DrawerNavLink>
				<a
					href="https://www.linkedin.com/in/anthony-caron-249442194/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<DrawerLinkInfo name="LinkedIn" icon={<FaLinkedin />} />
				</a>
			</DrawerNavLink>
			<DrawerNavLink>
				<button onClick={handleDarkMode}>
					{colorTheme === 'light' ? (
						<DrawerLinkInfo name="Dark Mode" icon={<IoMdMoon />} />
					) : (
						<DrawerLinkInfo
							name="Light Mode"
							icon={<IoMdSunny />}
						/>
					)}
				</button>
			</DrawerNavLink>
		</NavList>
	);
};

export default DrawerList;
