import styled, { css } from 'styled-components';

import { media } from '../../utils/media.js';

const evenStyles = css`
	grid-template-columns: 2fr 1fr;
	grid-template-areas: "image card";
	background: linear-gradient(
		to right,
		${props => props.background} 0%,
		${props => props.background} 75%,
		rgba(0, 0, 0, 0) 75%,
		rgba(0, 0, 0, 0) 100%
	);

	${media.down.xl} {
		background: linear-gradient(
			to right,
			${props => props.background} 0%,
			${props => props.background} 85%,
			rgba(0, 0, 0, 0) 85%,
			rgba(0, 0, 0, 0) 100%
		);
	}
`;
const oddStyles = css`
	grid-template-columns: 1fr 2fr;
	grid-template-areas: "card image";
	background: linear-gradient(
		to left,
		${props => props.background} 0%,
		${props => props.background} 75%,
		rgba(0, 0, 0, 0) 75%,
		rgba(0, 0, 0, 0) 100%
	);

	${media.down.xl} {
		background: linear-gradient(
			to left,
			${props => props.background} 0%,
			${props => props.background} 85%,
			rgba(0, 0, 0, 0) 85%,
			rgba(0, 0, 0, 0) 100%
		);
	}
`;

export const StyledProject = styled.article`
	margin-bottom: 90px;
	width: 100%;
	display: grid;
	${props => (props.index % 2 === 0 ? evenStyles : oddStyles)};

	align-items: center;

	${media.down.lg} {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;
		grid-template-areas: "image" "card";
		background: ${props => props.background};
		margin-top: 0px;
		margin-bottom: 150px;
	}
`;

export const ImageContainer = styled.div`
	grid-area: image;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;

	& img {
		height: 80%;
	}

	${media.down.lg} {
		padding: 40px 40px 120px;
		height: auto;

		& img {
			max-height: 500px;
			object-fit: contain;
		}
	}

	${media.down.md} {
		& img {
			height: auto;
			width: 100%;
			object-fit: contain;
		}
	}
`;
