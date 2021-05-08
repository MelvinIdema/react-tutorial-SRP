import clsx from "clsx";

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

