import clsx from "clsx";
import PropTypes from "prop-types";
import "./index.css";

export default function Input(props) {
    const { className, placeholder, required, type = "text", ...rest } = props;
    const classNames = clsx({ input: true }, className);

    return (
        <label className="label">
            {placeholder}
            {required && <span className="input-required">*</span>}
            <div>
                <input
                    type={type}
                    placeholder={placeholder}
                    className={classNames}
                    required={required}
                    {...rest}
                />
            </div>
        </label>
    );
}

Input.propTypes = {
    /** The placeholder AND label of the input */
    placeholder: PropTypes.string,
    /** Is the input required? */
    required: PropTypes.bool,
    /** The type of the input element */
    type: PropTypes.oneOf(['text', 'email', 'tel', 'date', 'color', 'file', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'url', 'week']),
}