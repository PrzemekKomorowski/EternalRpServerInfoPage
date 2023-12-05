import axios from "axios";
import {SignInRequest} from "../models/api/auth/SignInRequest";
import {SignInResponse} from "../models/api/auth/SignInResponse";

export class AuthApi {
    static signIn = async ( request : SignInRequest)=>
        await axios.post<SignInResponse>("/auth/login",request);

    static signUp = async ( request : SignInRequest) =>
        await axios.post<SignInRequest>("/auth/register",request)
}