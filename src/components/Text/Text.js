import styled from 'styled-components';

import { media } from '../../utils/media.js';

export const PageTitle = styled.h1`text-align: center;`;
export const PageSubtitle = styled.h2`
	color: ${({ theme }) => theme.color.primary};
	font-weight: 400;
	text-align: center;
`;

export const SectionTitle = styled.h2`
	text-align: ${({ center }) => (center ? 'center' : 'left')};
	margin-bottom: ${({ card }) => (card ? '10px' : '0.4em')};
`;

export const SectionSubtitle = styled.h3`
	margin-bottom: ${({ card }) => (card ? '30px;' : '16px')};
`;

export const SectionParagraph = styled.p`
	text-align: ${props => (props.center ? 'center' : 'left')};
	font-size: 1.2em;
	line-height: 1.5em;
	margin-bottom: ${({ card }) => (card ? '30px' : '1.4em')};

	& .bold {
		font-weight: 700;
		color: ${({ theme }) => theme.color.primary};
	}

	${media.down.lg} {
		font-size: 1.1em;
		line-height: 1.4em;
	}

	${media.down.sm} {
		font-size: 1em;
	}
`;

export const SectionListItem = styled.li`
	font-size: 1.2em;
	margin-bottom: 0.7em;

	& .bold {
		font-weight: 700;
		color: ${({ theme }) => theme.color.primary};
	}
	${media.down.lg} {
		font-size: 1.1em;
	}

	${media.down.sm} {
		font-size: 1em;
	}
`;
