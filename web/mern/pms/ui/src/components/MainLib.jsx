export const InputField = ({ type = "text", hint, otherProps }) => {

    return (
        <input
        {...otherProps}
        type={type}
        placeholder={hint}
        className="mt-1 mb-3 rounded-lg focus:outline-[#359FA0] w-full block bg-gray-200 py-3 px-4 py-1"
        />
    )
}

export const SelectField = ({data = []}) => {
    return (
        <select 
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

export const ActionButton = ({ text, otherProps }) => {
    return (
        <button
        {...otherProps}
        className="cursor-pointer bg-gray-900 text-gray-50 py-2 px-3 rounded hover:shadow-lg hover:bg-gray-950"
        >{text}</button>
    )
}

export const Divider = () => {
    return (
        <div className="py-[1px] my-5 rounded-full bg-gray-300" />
    )
}

