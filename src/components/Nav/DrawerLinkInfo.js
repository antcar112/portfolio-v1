import React from 'react';

const DrawerLinkInfo = ({ name, icon }) => {
	return (
		<div>
			<span>{name}</span>
			{icon}
		</div>
	);
};

export default DrawerLinkInfo;
