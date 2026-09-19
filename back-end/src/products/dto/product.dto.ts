import { IsNumber, IsString, Min } from 'class-validator';

export class ProductDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  imagem!: string;

  @IsNumber()
  @Min(0)
  preco!: number;

  @IsString()
  typeProduct!: string;
}
