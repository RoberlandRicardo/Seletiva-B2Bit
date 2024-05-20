
import logo from '../../assets/images/logo.png';
import Alert from '../../components/Alert';
import { TypeAlert } from '../../components/Alert/model';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useLoginViewModel from './view.model';

function Login() {

    const { 
        showErrEmpty,
        showErrNotFound,
        username,
        setUsername,
        password,
        setPassword,
        executeLogin 
    } = useLoginViewModel();

    return (
        <main className="flex justify-center items-center bg-background w-percentage/100 h-percentage/100">
            <form className="
                flex
                flex-col
                direction
                justify-center
                items-center
                w-[30%] 
                drop-shadow-cardLogin 
                rounded-[18px] 
                px-[26px]
                py-[40px]
                bg-background 
            ">
                <img className='mb-[14px]' src={logo} />
                {showErrEmpty && <Alert 
                    title='Campo obrigatório não inserido'
                    description='Todo os campos a seguir são obrigatório para realizar a
                    autenticação'
                    type={TypeAlert.ERROR}
                    className='mb-[12px]'
                />}
                {showErrNotFound && <Alert 
                    title='Combinação de E-mail e senha não encontrada'
                    description='Não encontramos nenhuma combinação de 
                    E-mail e senha correspondente. Verifique os campos e tente novamente'
                    type={TypeAlert.ERROR}
                    className='mb-[12px]'
                />}
                <Input
                    className='mb-[28px]'
                    labelText='E-mail'
                    placeholder='@gmail.com'
                    value={username}
                    onChange={(e) => setUsername(e.currentTarget.value)}
                />
                <Input 
                    className='mb-[36px]'
                    labelText='Senha'
                    type='password'
                    placeholder='************'
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <Button 
                    className="
                        !w-full
                    "
                    text='Sign In'
                    type='submit'
                    onClick={() => executeLogin()}
                />
            </form>
        </main>
    )
}

export default Login;