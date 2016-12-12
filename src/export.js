import React from 'react';
import { render } from 'react-dom';
import Button from './index';

if (document.getElementById('Button')) {
	render(
		<Button />,
		document.getElementById('Button')
	);
}