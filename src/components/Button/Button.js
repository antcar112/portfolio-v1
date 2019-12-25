import React from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { media } from '../../utils/media.js';
import ButtonText from './ButtonText';
import { BtnSolidStyles, BtnOutlineStyles } from './ButtonStyles';

const StyledBtn = styled.button`
	${BtnSolidStyles};
	width: 260px;
	margin: 0 auto;
	padding: 1.25em;

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
	}
	${media.down.sm} {
		height: 50px;
		width: 100%;

		& span {
			font-size: 1em;
		}
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
	}

	${media.down.sm} {
		height: 50px;
		width: 100%;

		& span {
			font-size: 1em;
		}
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
	width: 280px;
	height: 55px;
	background: ${({ theme }) => theme.color.bg};
	margin-bottom: 30px;

	& span {
		font-size: 1.2em;
	}
	
	${media.down.md} {
		margin-top: 30px;
	}

	${media.down.sm} {
		height: 50px;
		width: 100%;

		& span {
			font-size: 1em;
		}
	}
`;

const BackBtnContainer = styled.div`
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;

	${media.down.xs} {
		padding: 0 20px;
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
		<ButtonText text={text} type={'text'} />
		<ButtonText text={text} type={'hidden'} />
	</StyledBtnOutlineAniLink>
);

export const BackBtnOutline = ({ path, text, direction }) => (
	<BackBtnContainer>
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
	</BackBtnContainer>
);
