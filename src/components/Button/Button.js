import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

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
		width: 220px;
		padding: 1.1em;

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
	}
`;

const StyledBtnOutlineLink = styled(Link)`
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

export const Btn = ({ text, handleClick }) => (
	<StyledBtn onClick={handleClick}>
		<ButtonText text={text} type={'text'} />
		<ButtonText text={text} type={'hidden'} />
	</StyledBtn>
);

export const BtnOutlineLink = ({ path, text }) => (
	<StyledBtnOutlineLink to={path}>
		<ButtonText text={text} type={'text'} />
		<ButtonText text={text} type={'hidden'} />
	</StyledBtnOutlineLink>
);
