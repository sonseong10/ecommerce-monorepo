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
  Env: import.meta.env.VITE_APP_REACT_APP_UI_ENV,
  token: {
    name: 'token',
    header: 'Authorization',
  },
  Url: {
    BACKEND_URL: import.meta.env.VITE_APP_BACKEND_URL,
  },
}
