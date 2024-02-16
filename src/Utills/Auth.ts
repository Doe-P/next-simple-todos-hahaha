export const isAuth = () => {
    const setToken = (token: string): void => {
        localStorage.setItem("token", token);
    };

    const getToken = (): boolean => {
        let token = null
        if (typeof window !== "undefined") {
            token = localStorage.getItem("token") || null;
        }
        return token !== null;
    };

    const removeToken = (): void => {
        localStorage.removeItem("token");
    };

    return { setToken, getToken, removeToken };
};