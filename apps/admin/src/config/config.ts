export interface IURL {
  BACKEND_URL?: string
  MESSAGE_URL?: string
  BACKEND_LOGIN_URL?: string
}

export interface IConfig {
  Env?: string
  Url: IURL
  token: {
    name: string
    header: string
  }
}

export const config: IConfig = {
  Env: process.env.REACT_APP_UI_ENV,
  token: {
    name: 'token',
    header: 'Authorization',
  },
  Url: {
    BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
  },
}
