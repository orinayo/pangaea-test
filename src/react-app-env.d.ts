/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test' | 'staging'
    PUBLIC_URL: string
    REACT_APP_SERVER_URI: string
  }
}
