import React from 'react';

const ButtonText = ({ text, type }) => {
	return (
		<div className={`btn_text--${type}`}>
			<span>{text}</span>
		</div>
	);
};

export default ButtonText;
