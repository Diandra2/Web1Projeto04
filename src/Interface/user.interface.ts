export interface iuser {
    id: number
    email: string
    password: string
}

export interface IResponseUser {
    user: {
      id: number
      email: string
    }
    token: string
    expiresAt: string
  }
  
  export interface IAuthContextData {
    signIn(credentials: iuser): Promise<void>
    signOut(): Promise<void>
    loadUserStorageData(): Promise<void>
    token: string
    user: {
      id: number
      email: string
    }
    expiresAt: string
  }