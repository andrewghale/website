import React, { Fragment, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import DisplayCount from '../components/displaycount';
import ButtonAdd from '../components/buttonadd';
import ButtonSubtract from '../components/buttonsubtract';
import ButtonReset from '../components/buttonreset';

const Counter = () => {
	const [ count, setCount ] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	}

	const handleDecrement = () => {
		if (count >= 1) {
			setCount(count - 1);
		}
	}

	const handleReset = () => {
		setCount(0);
	}

	return (
		<Fragment>
			<Header pageName="numbermachine" />
				<div className="page-container">
					<ButtonAdd niallIsCool={false} age={29} buttonFunction={handleIncrement} />
					<ButtonSubtract buttonFunction={handleDecrement} />
					<ButtonReset buttonFunction={handleReset} />
					<DisplayCount count={count} />
				</div>
			<Footer pageName="numbermachine"/>
		</Fragment>
	)
}

export default Counter;