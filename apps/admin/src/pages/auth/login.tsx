import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Button from '../../components/ui/Button'
import { useAuth } from './authHook'

function BaiscUserLoginForm() {
  return (
    <>
      <h3>통합플랫폼 어드민</h3>
      <span>아이디</span>
      <input type="text" />
      <span>패스워드</span>
      <input type="password" />
      <Button text="로그인" color="primary" />
    </>
  )
}

function EasyLoginForm() {
  const { onLogin } = useAuth()
  return (
    <div>
      <span>테스터&방문자용 간편로그인</span>
      <div>
        <div>
          <FcGoogle />
          <Button type="button" btntype="ghost" onClick={() => onLogin('Google')} text="Google"></Button>
        </div>

        <div>
          <FaGithub />
          <Button type="button" btntype="ghost" onClick={() => onLogin('Github')} value="Github" text="Github"></Button>
        </div>
      </div>
    </div>
  )
}

function Login(): JSX.Element {
  return (
    <div>
      <div>
        <div>{/* <img  alt="브랜드 로고" /> */}</div>
        <div>
          <BaiscUserLoginForm />

          <EasyLoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
