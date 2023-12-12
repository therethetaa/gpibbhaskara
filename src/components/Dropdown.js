import {IoIosArrowDropdownCircle} from "react-icons/io";

export default function Dropdown({
                                     name,
                                     label,
                                     items,
                                     usePublicId = false,
                                     register,
                                     validation,
                                     errors,
                                     disabled,
                                     width = "w-full",
                                 }) {
    return (
        <div className={`flex flex-col ${width}`}>
            <label className="text-wood-cream mb-1">{label}</label>
            <div className="flex items-center">
                <select
                    id={name}
                    name={name}
                    disabled={disabled}
                    validation={validation}
                    {...register(name, validation)}
                    style={{
                        WebkitAppearance: "none",
                        backgroundColor: "#242526",
                    }}
                    className={`form-control w-full mt-1 mb-3 py-1.5 px-4 text-gray-200 rounded-full border 
          ${errors ? "border-red-700 focus:border-red-700" : "border-gray-600 focus:border-dark-gold"}
          focus:outline-none bg-transparent`}
                >
                    <option value="" disabled={true} style={{maxWidth: "10px"}}>
                        - Select an Option -
                    </option>
                    {items?.map((item) => {
                        return (
                            <option key={usePublicId ? item?.public_id : item?.id}
                                    value={usePublicId ? item?.public_id : item?.id} style={{maxWidth: "10px"}}>
                                {item?.nama}
                            </option>
                        );
                    })}
                </select>
                <IoIosArrowDropdownCircle color="gray" size="28" className="z-10 -ml-10 mb-2"/>
            </div>
            {errors ? <div className="-mt-2.5 ml-5 text-red-700">{errors.message}</div> : null}
        </div>
    );
}
