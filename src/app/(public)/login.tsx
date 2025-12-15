
import { LoginView } from '../../viewModels/Login/Login.view'
import { useLoginViewModel } from '../../viewModels/Login/useLogin.ViewModel'

export default function Login() {

  const props = useLoginViewModel()

  return (
    <LoginView {...props}/>
  )
}
