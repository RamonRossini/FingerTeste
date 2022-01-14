export class CreateAdressDto {
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    complemento?: string;
}
