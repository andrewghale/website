import React, { Fragment, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import DisplayCount from '../components/displaycount';
import ButtonAdd from '../components/buttonadd';
import ButtonSubtract from '../components/buttonsubtract';
import ButtonReset from '../components/buttonreset';
import thecount from '../assets/img/the_count_14aug.svg';
import thecounttitle from '../assets/img/the-count-title.svg';

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
				<div className="counter-container">
					<div className="the-count">
						<img className="the-count-img" src={thecount} alt="The Count"/>
						<img className="the-count-title" src={thecounttitle} alt="The Count Title"/>
						<div className="counter-all">
							<div className="counter-buttons">
								<ButtonAdd buttonFunction={handleIncrement} />
								<ButtonSubtract buttonFunction={handleDecrement} />
								<ButtonReset count={count} buttonFunction={handleReset} />
							</div>
							<DisplayCount count={count} />
						</div>
					</div>
					<div className="explain">
						<p>This is a simple counter app for learning React basics.</p>
						<p>You can increment, decrement and reset the counter value.</p>
					</div>
				</div>
			<Footer pageName="numbermachine"/>
		</Fragment>
	)
}

export default Counter;