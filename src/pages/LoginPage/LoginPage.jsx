import TopBar from "../../components/molecules/topBat/TopBar";
import FormLogin from "../FormLogin/FormLogin";

export default function LoginPage() {
    return (
        <div className="w-screen h-screen bg-[#C66464]">
            <TopBar />
            <FormLogin />
        </div>
    );
}