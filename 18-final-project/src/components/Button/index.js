import clsx from "clsx";
import PropTypes from "prop-types";
import "./index.css";

export default function Button(props) {
    const { label, outline, className, ...rest } = props;

    const classNames = clsx(
        'btn',
        {
            "btn-default": !outline,
            "btn-outline": outline,
        },
        className
    );

    return (
        <button className={classNames} {...rest}>
            {label}
        </button>
    );
}

Button.propTypes = {
    /** The label of the button */
    label: PropTypes.string,
    /** Is the button of type "outline"? */
    outline: PropTypes.bool,
}