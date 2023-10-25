import { TypeOf, object, string } from "zod"

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required!'
        }),
        password: string({
            required_error: 'Name is required!'
        }).min(6, 'Should Be 6 Characters Minimum'),
        passwordConfirmation: string({
            required_error: 'Name is required!'
        }),
        email: string({
            required_error: 'Email Is Required'
        }).email('Not A Valid Email')
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: 'Passwords Do Not Match',
        path: ["passwordConfirmation"]
    })
});

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, 'body.passwordConfirmation'>