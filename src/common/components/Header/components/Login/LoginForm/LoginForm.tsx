import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSupaService } from "../../../../../../SupabaseServices/LoginService/LoginSupaService";
import type { LoginForm, LoginFormProps } from "@types";

export const LoginForm = ({ onClose }: LoginFormProps) => {

    const { register, handleSubmit } = useForm<LoginForm>();

    const onSubmit: SubmitHandler<LoginForm> = async (data) => {
        loginSupaService(data, onClose);
    };

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-4 flex flex-col">
                <input placeholder="Email" className="p-2 border border-black rounded-sm" {...register("email", { required: true })} />
            </div>
            <div className="pt-4 flex flex-col">
                <input type="password" placeholder="Password" className="p-2 border border-black rounded-sm" {...register("password", { required: true })} />
            </div>

            <input className="pt-6" type="submit" />
        </form>
    )
}
