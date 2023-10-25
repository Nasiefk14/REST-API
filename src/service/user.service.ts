import UserModel from '../models/user.model'

export async function createUser(input: any){
    try{
        return await UserModel.create(input)
    } catch(e: any) {
        throw new Error(e)
    }
}