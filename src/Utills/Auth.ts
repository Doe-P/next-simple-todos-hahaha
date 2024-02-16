export class Auth {
    static setToken(token: string) {
        if (typeof window !== "undefined") {
            localStorage.setItem("token", token);
        }
    }

    private static getToken() {
        if (typeof window !== "undefined") {
            return localStorage.getItem("token") || null;
        }
        return null;
    }

    static isAuthenticated(): boolean {
        const token = Auth.getToken();
        return token ? true : false;
    }

    static removeToken() {
        if (typeof window !== "undefined") {
            localStorage.removeItem("token");
        }
    }
}