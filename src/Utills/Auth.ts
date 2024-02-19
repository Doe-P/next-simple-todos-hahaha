import Cookies from "universal-cookie";

export class Auth {
    static cookies: Cookies = new Cookies();
    static setToken(token: string) {
       this.cookies.set("token", token);
    }

    private static getToken() {
        return this.cookies.get("token");
    }

    static isAuthenticated(): boolean {
        const token = Auth.getToken();
        return !!token ? true : false;
    }

    static removeToken() {
        this.cookies.remove("token");
    }
}