export interface LoginData {
  usuario: string,
  fechaInicio: Date | null,
}
export const loginDataInit: LoginData = {
  usuario: '',
  fechaInicio: null
}
