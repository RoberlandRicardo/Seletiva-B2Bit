
export type Session = {
    user: {
        id: number,
        name: string,
        email: string,
        is_active: boolean,
        avatar: null,
        type: string,
        created: string,
        modified: string,
        role: string
    },
    tokens: {
        refresh: string,
        access: string
    }
}

export type Profile = {
    id: string,
    avatar: {
        id: number,
        high: string,
        medium: string,
        low: string
    },
    name: string,
    last_name: string,
    email: string,
    role: {
        value: number,
        label: string
    },
    last_login: string,
    staff_role: {
        value: number,
        label: string
    }
}