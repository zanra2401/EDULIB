import Logo from "../../atoms/logo/logo";
import { Globe } from "lucide-react";
import Button from "../../atoms/button/Button";

export default function TopBar() {
    return (
        <div className="h-[118px] flex justify-between items-center px-[20px] w-screen">
            <Logo className="h-full" /> 
            <Button value="DAFTAR" icon={Globe} />
        </div>
    );
}