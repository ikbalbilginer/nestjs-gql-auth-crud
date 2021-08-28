import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './models/user';
export declare class UsersService {
    private users;
    createUser(createUserData: CreateUserInput): User;
    updateUser(updateUserData: UpdateUserInput): User;
    getUser(getUserArgs: GetUserArgs): User;
    getUsers(): User[];
    deleteUser(deleteUserData: DeleteUserInput): User;
}
