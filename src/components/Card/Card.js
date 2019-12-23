import styled from 'styled-components';

import { media } from '../../utils/media.js';

export const Card = styled.div`
	grid-area: card;
	box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.15);
	padding: 30px;
	background: ${({ theme }) => theme.color.bgCard};
	transition: ${({ theme }) => theme.hoverTransition};
	${media.down.lg} {
		align-self: flex-start;
		margin: -100px auto -80px;
		width: 90%;
	}
`;

export const CardTitle = styled.h2`margin-bottom: 10px;`;
export const CardSubtitle = styled.h3`margin-bottom: 30px;`;
export const CardText = styled.p`
	margin-bottom: 30px;
	line-height: 1.7em;
`;
