import React, { Fragment, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import DisplayCount from '../components/displaycount';
import ButtonAdd from '../components/buttonadd';
import ButtonSubtract from '../components/buttonsubtract';
import ButtonReset from '../components/buttonreset';
import thecount from '../assets/img/the_count_14aug.svg';

const Counter = () => {
	const [ count, setCount ] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	}

	const handleDecrement = () => {
		if (!count <= 1) {
			setCount(count - 1);
		}
	}

	const handleReset = () => {
		setCount(0);
	}

	return (
		<Fragment>
			<Header pageName="numbermachine" />
				<div className="counter-container">
					<img src={thecount} alt="The Count"/>
					<ButtonAdd buttonFunction={handleIncrement} />
					<ButtonSubtract buttonFunction={handleDecrement} />
					<ButtonReset count={count} buttonFunction={handleReset} />
					<DisplayCount count={count} />
				</div>
			<Footer pageName="numbermachine"/>
		</Fragment>
	)
}

export default Counter;