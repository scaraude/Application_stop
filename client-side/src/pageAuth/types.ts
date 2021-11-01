enum RoleEnum {
    ROLE_USER = "ROLE_USER",
}

export type User = {
    accessToken: string;
    email: string;
    id: string;
    roles: RoleEnum[];
    username: string;
}