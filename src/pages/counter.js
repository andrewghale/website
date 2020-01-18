import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DisplayCount from '../components/DisplayCount';
import ButtonAdd from '../components/ButtonAdd';
import ButtonSubtract from '../components/ButtonSubtract';
import ButtonReset from '../components/ButtonReset';

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
                <ButtonAdd buttonFunction={handleIncrement} />
                <ButtonSubtract buttonFunction={handleDecrement} />
                <ButtonReset buttonFunction={handleReset} />
                <DisplayCount count={count} />
            </div>
            <Footer pageName="numbermachine"/>
        </Fragment>
    )
}

export default Counter