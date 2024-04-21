import {z} from "zod";

export const signInSchema=z.object({
    identifier:z.string(),  //for email or username.. whatever we are using
    password:z.string()
})