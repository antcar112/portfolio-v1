import styled from 'styled-components';

const Card = styled.div`
	box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.15);
	padding: 30px;
	background: ${({ theme }) => theme.color.bgCard};
	transition: ${({ theme }) => theme.hoverTransition};
	grid-area: card;
`;

export default Card;
