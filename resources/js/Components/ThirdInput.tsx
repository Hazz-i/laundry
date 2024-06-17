type ThirdInputProps = {
    name: string;
    type?: string;
    className?: string;
    isFocused?: boolean;
    required?: boolean;
    onChange?: any;
    setValue?: any;
    text?: string;
    value?: any;
};

const ThirdInput = (props: ThirdInputProps) => {
    const {
        name,
        type,
        className,
        isFocused,
        required,
        setValue,
        text,
        value,
    } = props;

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text-alt text-black">{name}</span>
            </div>
            <input
                type={type}
                className={
                    "input input-bordered input-sm w-full bg-white border-black border-opacity-20 " +
                    className
                }
                value={value}
                required={required}
                onChange={(ev) => setValue(text, ev.target.value)}
            />
        </label>
    );
};
export default ThirdInput;
