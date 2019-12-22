import styled from 'styled-components';
import { Link } from 'gatsby';

export const Btn = styled.button`
	color: white;
	background: ${({ theme }) => theme.color.primary};
	border: 4px solid ${({ theme }) => theme.color.primary};
	width: 260px;
	padding: 0.8em;
	font-size: 1.2em;
	margin: 0 auto;
	cursor: pointer;
	transition: ${({ theme }) => theme.hoverTransition};

	&:hover,
	&:active,
	&:focus {
		color: ${({ theme }) => theme.color.primary};
		background: ${({ theme }) => theme.color.bg};
	}
`;

export const BtnOutlineLink = styled(Link)`
    display: block;
    color:  ${({ theme }) => theme.color.primary};
    border: 4px solid  ${({ theme }) => theme.color.primary};
    width: 200px;
    text-decoration: none;
    padding: 0.8em;
    font-size: 1.1em;
    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    transition: ${({ theme }) => theme.hoverTransition};


    &:hover, 
    &:active, 
    &:focus {
        color: white;
        background:  ${({ theme }) => theme.color.primary};
    }
`;
