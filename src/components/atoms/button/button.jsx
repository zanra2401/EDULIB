
export default function Button({value, icon: Icon, w}) {
    return (
        <button className={`w-${w} justify-center hover:!bg-indigo-800 flex items-center gap-[5px]  h-[50px] !bg-indigo-500`} >
            {Icon && <Icon color="white" className="h-full" />}
            {value}
        </button>
    );
}