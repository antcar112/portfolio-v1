import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {
	IoMdFolder,
	IoMdMail,
	IoMdPerson,
	IoMdSunny,
	IoMdMoon,
} from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const StyledNavDrawer = styled.div`
	width: 100%;
	/* height: 60vh; */
	max-width: 500px;
	margin: 0 auto;
	padding: 0;
`;

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

const NavListItem = styled.li`
	display: block;
	width: 100%;

	& button {
		border: none;
		background: none;
	}

	& a,
	& button {
		font-size: 1.1em;
		text-decoration: none;
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 3vh;
		cursor: pointer;

		& div {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			max-width: 160px;

			& span {
				transition: ${({ theme }) => theme.hoverTransition};
			}

			& svg {
				transition: ${({ theme }) => theme.hoverTransition};
				font-size: 1.5em;
			}
		}

		&:hover div span,
		&:hover div svg {
			color: ${({ theme }) => theme.color.textSecondary};
		}

		&.nav_drawer_link--active div {
			color: ${({ theme }) => theme.color.text};

			&::before {
				content: '';
				height: 3px;
				background: ${({ theme }) => theme.color.primary};
				position: absolute;
				bottom: -7px;
				left: -12px;
				right: -12px;
			}
		}
	}
`;

const DrawerList = ({ colorTheme, toggleTheme }) => {
	return (
		<StyledNavDrawer>
			<NavList>
				<NavListItem>
					<Link to="/" activeClassName="nav_drawer_link--active">
						<div>
							<span>Work</span>
							<IoMdFolder />
						</div>
					</Link>
				</NavListItem>
				<NavListItem>
					<Link
						to="/about/"
						activeClassName="nav_drawer_link--active"
					>
						<div>
							<span>About</span>
							<IoMdPerson />
						</div>
					</Link>
				</NavListItem>
				<NavListItem>
					<a href="mailto:antcar1992@gmail.com">
						<div>
							<span>Contact</span>
							<IoMdMail />
						</div>
					</a>
				</NavListItem>
				<NavListItem>
					<a
						href="https://github.com/antcar112"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div>
							<span>GitHub</span>
							<FaGithub />
						</div>
					</a>
				</NavListItem>
				<NavListItem>
					<a
						href="https://www.linkedin.com/in/anthony-caron-249442194/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div>
							<span>LinkedIn</span>
							<FaLinkedin />
						</div>
					</a>
				</NavListItem>
				<NavListItem>
					<button onClick={toggleTheme}>
						{colorTheme === 'light' ? (
							<div>
								<span>Dark Mode</span>
								<IoMdMoon className="moon" />
							</div>
						) : (
							<div>
								<span>Light Mode</span>
								<IoMdSunny className="sun" />
							</div>
						)}
					</button>
				</NavListItem>
			</NavList>
		</StyledNavDrawer>
	);
};

export default DrawerList;
