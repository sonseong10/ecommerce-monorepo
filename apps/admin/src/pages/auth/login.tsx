import styled from 'styled-components'
import Logo from '../../assets/images/dark-logo.svg'
import { useAuth } from './authHook'
import { ElementGroup } from 'src/styles/components'
import Button from '../../components/ui/Button'
import type { Theme } from 'src/styles/theme'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--bg-grey);
`

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  border-radius: 10px;
  background-color: var(--background-body);
  overflow: hidden;
  box-shadow: 4px 4px 24px var(--disabled);
`

const LoginBox = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  font-size: 14px;

  h3 {
    font-size: 24px;
    margin-bottom: 24px;
    line-height: 1;
  }
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 372px;
  background-color: var(--primary);
`

const UserLoginForm = styled.form`
  margin-bottom: 32px;

  input {
    padding: 4px 16px;
    border: 1px solid var(--border-primary);
    font-size: ${props => (props.theme as Theme).fontSize.text.lg};
    min-height: 48px;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 8px;

    &:focus {
      border-color: var(--primary);
      &::placeholder {
        color: var(--primary);
      }
    }
  }

  button {
    width: 100%;
  }
`

const EasyLoginWrapper = styled(ElementGroup.Row)`
  flex-wrap: nowrap;
  margin-top: 12px;

  button {
    width: 100%;
  }
`

function BaiscUserLoginForm() {
  return (
    <>
      <UserLoginForm
        action={void 0}
        onSubmit={e => {
          e.preventDefault()
          console.log('login')
        }}
      >
        <input id="id" type="text" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <Button
          text="로그인"
          color="primary"
          $btnSize="md"
          onSubmit={e => {
            e.preventDefault()
            console.log('login')
          }}
        />
      </UserLoginForm>
    </>
  )
}

function EasyLoginForm() {
  const { onLogin } = useAuth()
  return (
    <EasyLoginWrapper>
      <Button type="button" $btnType="border" thin={true} onClick={() => onLogin('Google')} text="for Google" />

      <Button
        type="button"
        $btnType="border"
        thin={true}
        onClick={() => onLogin('Github')}
        value="Github"
        text="for Github"
      />
    </EasyLoginWrapper>
  )
}

function Login(): JSX.Element {
  return (
    <Wrapper>
      <LoginForm>
        <ImageBox>
          <img src={Logo} alt="로고" />
        </ImageBox>
        <LoginBox>
          <div>
            <h3>통합 어드민</h3>

            <BaiscUserLoginForm />
          </div>

          <div>
            <span>방문자용 간편로그인</span>

            <EasyLoginForm />
          </div>
        </LoginBox>
      </LoginForm>
    </Wrapper>
  )
}

export default Login
