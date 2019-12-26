import styled, { css } from 'styled-components';

import { media } from '../../utils/media.js';

export const CardStyles = css`
	box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.15);
	padding: 30px;
	background: ${({ theme }) => theme.color.bgCard};
	transition: ${({ theme }) => theme.hoverTransition};
`;

export const Card = styled.div`
	${CardStyles};
	grid-area: card;

	${media.down.lg} {
		align-self: flex-start;
		margin: -100px auto -80px;
		width: 90%;
	}
`;
