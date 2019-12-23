import styled from 'styled-components';

import { media } from '../../utils/media.js';

export const H2 = styled.h2`
	text-align: center;
	margin-bottom: 0.5em;
`;

export const Paragraph = styled.p`
	text-align: ${props => (props.center ? 'center' : 'left')};
	font-size: 1.2em;
	line-height: 1.5em;
	margin-bottom: 1.4em;

	& .bold {
		font-weight: 700;
		color: ${({ theme }) => theme.color.primary};
	}

	${media.down.lg} {
		font-size: 1.1em;
		line-height: 1.4em;
	}

	${media.down.md} {
		top: -25px;
		justify-self: center;
	}

	${media.down.sm} {
		font-size: 1em;
		line-height: 1.4em;
		margin: 0 25px;
	}
`;
