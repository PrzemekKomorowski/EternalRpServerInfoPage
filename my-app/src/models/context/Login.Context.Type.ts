export type LoginContextType = {
    showLogin:boolean,
    loginModifier:(shows:boolean) => void,
    showRegister:boolean,
    registerModifier:(shows:boolean) => void
}
