export default function InputText({name, value, h}) {
    return (
        <div className="text-black gap-1 flex flex-col">
            <label className="text-[#303030]" htmlFor={name} >{value}</label>
            <input type="text" className={`bg-[#E6E6E6] focus:outline-none h-${h} focus:ring-2 focus:ring-indigo-500 p-2 rounded-[8px]`} name={name} placeholder={value} />
        </div>
    );
}