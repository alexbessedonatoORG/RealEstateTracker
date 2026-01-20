import { useForm, type SubmitHandler } from "react-hook-form";
import { signUpSupaService } from "../../../../../../SupabaseServices/SignUpService/signUpSupaService";
import type { SignUpForm, SignUpFormProps } from "@types";

export const SignUpForm = ({ onClose }: SignUpFormProps) => {

    const { register, handleSubmit } = useForm<SignUpForm>();

    const onSubmit: SubmitHandler<SignUpForm> = async (data) => {

        await signUpSupaService(data, onClose);

    };

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-4 flex flex-col">
                <input placeholder="Username" className="p-2 border border-black rounded-sm" {...register("username", { required: true })} />
            </div>
            <div className="pt-4 flex flex-col">
                <input placeholder="Email" className="p-2 border border-black rounded-sm" {...register("email", { required: true })} />
            </div>
            <div className="pt-4 flex flex-col">
                <input placeholder="Password" className="p-2 border border-black rounded-sm" {...register("password", { required: true })} />
            </div>
            <input className="pt-6" type="submit" />
        </form>
    )
}
