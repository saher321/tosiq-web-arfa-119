export const InputField = ({ type = "text", hint, ...othersProp }) => {

    return (
        <input
        {...othersProp}
        type={type}
        placeholder={hint}
        className="mt-1 mb-3 rounded-lg focus:outline-[#359FA0] w-full block bg-gray-200 py-3 px-4 py-1"
        />
    )
}

export const SelectField = ({data = [], ...othersProp}) => {
    return (
        <select 
        { ...othersProp }
        className="mt-1 mb-3 rounded-lg focus:outline-[#359FA0] w-full block bg-gray-200 py-3 px-4 py-1"
        >
            {data.length == 0 && <option disabled>Not options provided yet</option>}
            {
            data.map((opt, i) => {
                return (
                    <option key={i} value={opt.value}>{opt.text}</option>
                )
            })
            }
        </select>
    )
}

export const ActionButton = ({ loading = false, text, ...othersProp }) => {
    return (
        <button
        disabled={loading}
        {...othersProp}
        className="disabled:bg-gray-500 disabled:text-gray-50 
        disabled:cursor-not-allowed disabled:shadow-none 
        cursor-pointer bg-gray-900 text-gray-50 py-2 px-3 
        rounded hover:shadow-lg hover:bg-gray-950"
        >{loading ? "Please wait, loading..." : text}</button>
    )
}

export const Divider = () => {
    return (
        <div className="py-[1px] my-5 rounded-full bg-gray-300" />
    )
}

