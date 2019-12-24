import React from 'react';
import styled, { css } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { media } from '../../utils/media.js';
import ButtonText from './ButtonText';

const SharedBtnStyles = css`
	cursor: pointer;
	display: inline-block;
	position: relative;
	text-decoration: none;
	transition: ${({ theme }) => theme.hoverTransition};
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		z-index: 1;
		top: 0;
		bottom: 0;
		left: 110%;
		width: 120%;

		transition: all 375ms;
	}

	&:hover::after,
	&:active::after,
	&:focus::after {
		left: -10%;
	}

	& div {
		width: 100%;
		height: 100%;
		display: inline-block;
		display: grid;
		place-items: center center;
		pointer-events: none;
	}

	& span {
		display: inline-block;
		font-size: 1.2em;
		pointer-events: none;
	}

	& .btn_text--text {
		transition: transform 500ms, opacity 250ms 120ms;
		opacity: 1;
	}

	&:hover .btn_text--text,
	&:active .btn_text--text,
	&:focus .btn_text--text {
		opacity: 0;
		transform: translateX(-20%);
		transition: transform 500ms, opacity 250ms;
	}

	& .btn_text--hidden {
		position: absolute;
		transition: right 500ms, opacity 250ms;
		opacity: 0;
		right: -20%;
		top: 0;
		z-index: 2;
	}

	&:hover .btn_text--hidden,
	&:active .btn_text--hidden,
	&:focus .btn_text--hidden {
		right: 0;
		opacity: 1;
		transition: right 500ms, opacity 250ms 120ms;
	}

	${media.down.md} {
		& span {
			font-size: 1em;
		}
	}

	${media.down.xs} {
		width: 90%;
	}
`;

const BtnSolidStyles = css`
	${SharedBtnStyles};
	border: none;
	background: ${({ theme }) => theme.color.primary};

	&::after {
		background: ${({ theme }) => theme.color.primaryDarkened};
	}

	& span {
		color: white;
	}
`;

const BtnOutlineStyles = css`
	${SharedBtnStyles};
	border: 4px solid ${({ theme }) => theme.color.primary};
	background: ${({ theme }) => theme.color.bgCard};

	&::after {
		background: ${({ theme }) => theme.color.primary};
	}

	& .btn_text--text {
		& span {
			color: ${({ theme }) => theme.color.primary};
		}
	}

	& .btn_text--hidden {
		& span {
			color: white;
		}
	}
`;

const StyledBtn = styled.button`
	${BtnSolidStyles};
	width: 260px;
	margin: 0 auto;
	padding: 1.25em;

	${media.down.md} {
		width: 220px;
		padding: 1.1em;
	}
`;
const StyledBtnAnchor = styled.a`
	${BtnSolidStyles};
	width: 240px;
	height: 60px;
	margin: 0;

	& span {
		font-size: 1.1em;
	}

	${media.down.md} {
		width: 220px;
		padding: 1.1em;
	}
`;

const StyledBtnOutlineAnchor = styled.a`
	${BtnOutlineStyles};
	width: 240px;
	height: 60px;
	margin: 0;
	background: ${({ theme }) => theme.color.bg};

	& span {
		font-size: 1.1em;
	}

	${media.down.md} {
		width: 220px;
		padding: 1.1em;
	}
`;

const StyledBtnOutlineAniLink = styled(AniLink)`
	${BtnOutlineStyles};
	width: 200px;
	margin: 0 auto;
	padding: 0.8em;

	& span {
		font-size: 1.1em;
	}
	
	${media.down.md} {
		& span {
			font-size: 1em;
		}
	}

	${media.down.xs} {
		padding: 0.7em;
		width: 100%;
	}
`;

const StyledBackBtnOutline = styled(AniLink)`
	${BtnOutlineStyles};
	width: 70px;
	height: 70px;
	position: fixed;
	bottom: 40px;
	right: 40px;
	background: ${({ theme }) => theme.color.bg};

	& span {
		font-size: 1em;
	}
	
	${media.down.md} {
		width: 60px;
		height: 60px;
		bottom: 20px;
		right: 20px;

		& span {
			font-size: 0.9em;
		}
	}

	${media.down.xs} {
		width: 60px;
		height: 60px;
	}
`;

export const Btn = ({ text, handleClick }) => (
	<StyledBtn onClick={handleClick}>
		<ButtonText text={text} type={'text'} />
		<ButtonText text={text} type={'hidden'} />
	</StyledBtn>
);

export const BtnAnchor = ({ text, link }) => (
	<StyledBtnAnchor href={link} target="_blank" rel="noopener noreferrer">
		<ButtonText text={text} type={'text'} />
		<ButtonText text={text} type={'hidden'} />
	</StyledBtnAnchor>
);

export const BtnOutlineAnchor = ({ text, link }) => (
	<StyledBtnOutlineAnchor
		href={link}
		target="_blank"
		rel="noopener noreferrer"
	>
		<ButtonText text={text} type={'text'} />
		<ButtonText text={text} type={'hidden'} />
	</StyledBtnOutlineAnchor>
);

export const BtnOutlineAniLink = ({ path, text, direction }) => (
	<StyledBtnOutlineAniLink
		to={path}
		cover
		direction={direction}
		bg="#0F97DB"
		duration={0.8}
	>
		<div />
		<ButtonText text={text} type={'text'} />
		<ButtonText text={text} type={'hidden'} />
	</StyledBtnOutlineAniLink>
);

export const BackBtnOutline = ({ path, text, direction }) => (
	<StyledBackBtnOutline
		to={path}
		cover
		direction={direction}
		bg="#0F97DB"
		duration={0.8}
	>
		<ButtonText text={text} type={'text'} />
		<ButtonText text={text} type={'hidden'} />
	</StyledBackBtnOutline>
);
