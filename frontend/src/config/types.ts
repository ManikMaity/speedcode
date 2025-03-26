
export type UserData =  {
    _id: string
    username:string
    avatar: string
    email: string
    solvedProblems: any[],
    ranking: number,
    description: string,
    createdAt:string,
    updatedAt:string,
    __v: number
}

export interface AuthStore {
    userData : UserData | null,
    token : string | null,
    setUserData : (data : UserData) => void,
    setToken : (token : string) => void,
    logout : () => void
}