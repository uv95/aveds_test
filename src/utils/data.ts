export interface IUser {
        name: string,
        email: string,
        password: string
}

export const userData: IUser[] = [
    {
        name: 'Алексей',
        email: 'alex@gmail.com',
        password: '12345678'
    },
    {
        name: 'Мария',
        email: 'mary@gmail.com',
        password: '12345678'
    },
    {
        name: 'Петр',
        email: 'peter@gmail.com',
        password: '12345678'
    }
]