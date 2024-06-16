type ThirdInputProps = {
    name: string;
    type?: string;
    className?: string;
    isFocused?: boolean;
    required?: boolean;
    onChange?: any;
    setValue?: any;
};

const ThirdInput = (props: ThirdInputProps) => {
    const { name, type, className, isFocused, required, setValue } = props;

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text-alt text-black">{name}</span>
            </div>
            <input
                type={type}
                className={
                    "input input-bordered input-sm w-full bg-white border-black" +
                    className
                }
                required={required}
                onChange={(ev) => setValue(ev.target.value)}
            />
        </label>
    );
};
export default ThirdInput;
