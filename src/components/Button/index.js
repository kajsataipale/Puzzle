import React, { Component } from 'react';
import './index.scss';
import cx from 'classnames';

class Button extends Component {
    render() {
        const {label, onClick, color, value, width} = this.props;
        const classNames = cx('button', color && 'button--' + color, label && 'button--with-label', width && 'button--' + width);

        return (
            <button className={classNames} value={value} onClick={onClick}>
                <span className='button__label'>{ label }</span>
            </button>
        )
    }
}

Button.defaultProps = {
    label: '',
}

export default Button;