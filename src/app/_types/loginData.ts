import { UUID } from "crypto"

export interface LoginData {
    user: {
        userId: UUID,
        email: string,
        phone: string | null,
    },
    session: {
        authtoken: string,
        refreshToken: string
    }
}