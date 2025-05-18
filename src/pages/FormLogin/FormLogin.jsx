import { Globe, LogIn } from "lucide-react";
import Button from "../../components/atoms/button/Button";
import InputText from "../../components/atoms/inputText/InputText";

export default function FormLogin() {
    return (
        <div className="w-[577px] h-fit p-[20px] absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] rounded-[8px] bg-white ">
            <div className="text-[#303030] border-b-2 w-fit border-[#B2B2B2] pb-[5px] text-2xl font-semibold">
                LOGIN
            </div>
            
            <div className="flex mt-[20px] flex-col gap-[20px]">
                <InputText h="40px" name="NISN" value="NISN" />
                <InputText name="Password" value="Password" />
                <Button value="Masuk" icon={LogIn} w="full" />
            </div>
        </div>
    );
}