import { Address } from "src/adresses/entities/adress.entity";

export class CreateUserDto {
    firstName: string;
    lastName: string;
    isActive?: boolean;
    address?: Address;
}
