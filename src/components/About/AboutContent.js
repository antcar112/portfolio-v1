import React from 'react';
import styled from 'styled-components';

import html from '../../images/tech/html.svg';
import css from '../../images/tech/css.svg';
import javascript from '../../images/tech/javascript.svg';
import react from '../../images/tech/react.svg';
import gatsby from '../../images/tech/gatsby.svg';
import firebase from '../../images/tech/firebase.svg';
import graphql from '../../images/tech/graphql.svg';
import bootstrap from '../../images/tech/bootstrap.svg';
import c from '../../images/tech/c.svg';
import java from '../../images/tech/java.svg';
import mongodb from '../../images/tech/mongodb.svg';
import mysql from '../../images/tech/mysql.svg';
import node from '../../images/tech/node.svg';
import sass from '../../images/tech/sass.svg';

const AboutText = styled.article`
	width: 100%;
	max-width: 500px;

	& p {
		font-size: 1.2em;
		line-height: 1.5em;
		margin-top: 1.4em;
	}

	& .bold {
		font-weight: 700;
		color: ${({ theme }) => theme.color.primary};
	}
`;

const Tech = styled.article`
	& .tech-flex {
		width: 100%;
		display: flex;
		justify-content: space-between;

		& svg {
			font-size: 2.4em;
		}

		& img {
			height: 2.4em;
			filter: grayscale(100%);

			&:hover {
				filter: none;
			}
		}
	}
`;

const AboutContent = () => {
	return (
		<div>
			<AboutText>
				<p>
					I'm <span className="bold">Anthony Caron</span>, a software
					developer and designer. I am currently earning a{' '}
					<a
						className="bold"
						href="https://www.bcit.ca/study/programs/5500dipma"
					>
						Computer Systems Technology
					</a>{' '}
					diploma at the{' '}
					<a className="bold" href="https://www.bcit.ca/">
						British Columbia Institute of Technology
					</a>.
				</p>{' '}
				<p>
					I love how developing software allows me to build something
					new from scratch. I also enjoying the constant problem
					solving and learning.
				</p>
				<p>
					I currently live in the greater{' '}
					<span className="bold">Vancouver</span> area. In my spare
					time, I enjoy watching hockey, exploring new types of music,
					running and cooking.
				</p>
			</AboutText>

			<Tech>
				<h2>Tech I Know</h2>
				<div className="tech-flex">
					<img src={html} alt="" />
					<img src={css} alt="" />
					<img src={javascript} alt="" />
					<img src={node} alt="" />
					<img src={react} alt="" />
					<img src={gatsby} alt="" />
					<img src={graphql} alt="" />
					<img src={sass} alt="" />
					<img src={bootstrap} alt="" />
					<img src={mysql} alt="" />
					<img src={mongodb} alt="" />
					<img src={firebase} alt="" />
					<img src={java} alt="" />
					<img src={c} alt="" />
				</div>
			</Tech>
			<h2>Contact Info</h2>
		</div>
	);
};

export default AboutContent;
