import React from 'react';
import styled from 'styled-components';
import { IoMdMail } from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { media } from '../../utils/media.js';
import { H2, Paragraph } from './Text.js';

const StyledAboutContact = styled.section``;

const AboutContactList = styled.ul`
	width: 100%;
	max-width: 600px;
	display: flex;
	flex: 1;
	justify-content: space-between;
	margin: 0 auto;
	padding: 25px;
	list-style: none;

	${media.down.md} {
		flex-direction: column;
		align-items: center;
	}

	& a {
		text-decoration: none;
		font-size: 1.2em;
		display: flex;
		align-items: center;
		margin-bottom: 30px;
		position: relative;

		${media.down.md} {
			justify-content: space-between;
			width: 130px;
		}

		${media.down.sm} {
			font-size: 1em;

			& svg {
				font-size: 1.4em;
			}
		}
		& span,
		& svg {
			transition: color ease-in-out 250ms;
		}

		& svg {
			font-size: 1.7em;
			margin-right: 0.5em;
		}

		&::before {
			content: '';
			left: -10px;
			right: -10px;
			bottom: -10px;
			height: 2px;
			background: ${({ theme }) => theme.color.primary};
			position: absolute;
			transform: scaleX(0);
			transform-origin: 0;
			transition: transform ease-in-out 150ms;
		}

		&:hover {
			& span,
			& svg {
				color: ${({ theme }) => theme.color.primary};
			}

			&::before {
				transform: scaleX(1);
			}
		}
	}
`;

const AboutContact = () => {
	return (
		<StyledAboutContact>
			<H2>Get In Touch</H2>
			<Paragraph center>
				I'd love to answer any questions you may have.
			</Paragraph>
			<AboutContactList>
				<li>
					<a href="mailto:anthony.j.caron@gmail.com">
						<IoMdMail />
						<span> Email</span>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/antcar112"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
						<span> GitHub</span>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/anthony-caron-249442194/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
						<span> LinkedIn</span>
					</a>
				</li>
			</AboutContactList>
		</StyledAboutContact>
	);
};

export default AboutContact;
