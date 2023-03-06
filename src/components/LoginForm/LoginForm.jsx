import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/userActions'
const LoginForm = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = data => {
        dispatch(login(data))
    }

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Email" {...register("email", { required: true })} />
                {errors?.email && <p>El email es requerido</p>}
                <input type="password" placeholder="Password" {...register("password", { required: true })} />
                {errors?.password && <p>El password es requerido</p>}
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
export default LoginForm