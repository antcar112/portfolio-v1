import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';

const StyledHamburger = styled.button`
	border: none;
	background: none;
	height: 60px;
	padding: 0 10px;
	display: none;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;
	z-index: 5;
	outline: none;

	${media.down.md} {
		display: flex;
	}

	& span {
		display: block;
		margin: 2px;
		background: ${({ theme }) => theme.color.text};
		height: 2px;
		width: 26px;
		transition: transform 150ms linear,
			${({ theme }) => theme.hoverTransition};
	}

	&:hover,
	&:focus {
		& span {
			background: ${({ theme }) => theme.color.primary};
		}
		& .mid-bar {
			transform: scaleX(0.6);
		}
		& .top-bar,
		& .bot-bar {
			transform: scaleX(0.8);
		}
	}

	&.hamburger-active {
		& span {
			background: ${({ theme }) => theme.color.text};
		}
		& .top-bar {
			transform: translateY(6px) rotate(45deg) scaleX(0.9);
		}

		& .mid-bar {
			transform: scaleX(0);
		}

		& .bot-bar {
			transform: translateY(-6px) rotate(-45deg) scaleX(0.9);
		}

		&:hover {
			& span {
				background: ${({ theme }) => theme.color.primary};
			}
			& .top-bar {
				transform: translateY(6px) rotate(45deg) scale(1.05);
			}

			& .bot-bar {
				transform: translateY(-6px) rotate(-45deg) scale(1.05);
			}
		}
	}
`;

const Hamburger = ({ drawerOpen, setDrawerOpen }) => {
	return (
		<StyledHamburger
			className={drawerOpen ? 'hamburger-active' : ''}
			onClick={() => setDrawerOpen(!drawerOpen)}
		>
			<span className="top-bar" />
			<span className="mid-bar" />
			<span className="bot-bar" />
		</StyledHamburger>
	);
};

export default Hamburger;
