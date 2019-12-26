import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { BtnSolidStyles, BtnOutlineStyles } from './ButtonStyles';

const StyledButton = styled.button`
	${({ outline }) => (outline ? BtnOutlineStyles : BtnSolidStyles)};
`;

const StyledAnchor = styled.a`
	${({ outline }) => (outline ? BtnOutlineStyles : BtnSolidStyles)};
`;

const StyledAniLink = styled(AniLink)`
	${({ outline }) => (outline ? BtnOutlineStyles : BtnSolidStyles)};
`;

export const Button = ({ outline, to, href, text, direction, handleClick }) => {
	const themeContext = useContext(ThemeContext);
	if (to) {
		return (
			<StyledAniLink
				outline={outline}
				to={to}
				cover
				direction={direction}
				bg={themeContext.color.primary}
				duration={0.8}
			>
				<ButtonText text={text} type={'text'} />
				<ButtonText text={text} type={'hidden'} />
			</StyledAniLink>
		);
	}

	if (href) {
		return (
			<StyledAnchor
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				outline={outline}
			>
				<ButtonText text={text} type={'text'} />
				<ButtonText text={text} type={'hidden'} />
			</StyledAnchor>
		);
	}

	return (
		<StyledButton onClick={handleClick} outline={outline}>
			<ButtonText text={text} type={'text'} />
			<ButtonText text={text} type={'hidden'} />
		</StyledButton>
	);
};

export default Button;

const ButtonText = ({ text, type }) => {
	return (
		<div className={`btn_text--${type}`}>
			<span>{text}</span>
		</div>
	);
};
