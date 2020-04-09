import React from 'react'
import PropTypes from 'prop-types';

class Button extends React.Component {
    computeClassNames() {
        let defaultClass = 'button';

        if (this.props.ripple === true && this.props.disabled === false) {
            defaultClass += ' ripple';
        }

        return defaultClass + ' ' + this.props.additionalClassNames;
    }

    renderLink() {
        return (
            <a
                href = { this.props.href }
                disabled = { this.props.disabled }
                className = { this.computeClassNames() }
            >
                { this.props.children }
            </a>
        )
    }

    renderButton() {
        return (
            <button
                type = { this.props.buttonType }
                disabled = { this.props.disabled }
                className = { this.computeClassNames() }
            >
                { this.props.children }
            </button>
        );
    };

    render() {
        if (this.props.href !== '') {
            return this.renderLink();
        }

        return this.renderButton();
    }
}

Button.propTypes = {
    disabled: PropTypes.bool,
    ripple: PropTypes.bool,
    buttonType: PropTypes.oneOf(['submit', 'button', 'reset']),
    additionalClassNames: PropTypes.string,
    href: PropTypes.string
};

Button.defaultProps = {
    buttonType: 'button',
    disabled: false,
    ripple: true,
    additionalClassNames: '',
    href: ''
};

export default Button;

