import { Type } from 'class-transformer';
import {
  IsCurrency,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 60)
  name: string;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ',' })
  @Matches(RegExp('^((?![-]).)*$'))
  minValue: number;

  @IsNumber()
  @Min(0)
  @Max(12)
  @Type(() => Number)
  timeInterval: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  @Type(() => Number)
  serviceFee: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ',' })
  @Matches(RegExp('^((?![-]).)*$'))
  restroomValue: number;

  @IsNumber()
  @Min(0)
  @Max(12)
  @Type(() => Number)
  restroomInterval: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ',' })
  @Matches(RegExp('^((?![-]).)*$'))
  kitchenValue: number;

  @IsNumber()
  @Min(0)
  @Max(12)
  @Type(() => Number)
  kitchenInterval: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ',' })
  @Matches(RegExp('^((?![-]).)*$'))
  roomValue: number;

  @IsNumber()
  @Min(0)
  @Max(12)
  @Type(() => Number)
  roomInterval: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ',' })
  @Matches(RegExp('^((?![-]).)*$'))
  bedroomValue: number;

  @IsNumber()
  @Min(0)
  @Max(12)
  @Type(() => Number)
  bedroomInterval: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ',' })
  @Matches(RegExp('^((?![-]).)*$'))
  backyardValue: number;

  @IsNumber()
  @Min(0)
  @Max(12)
  @Type(() => Number)
  backyardInterval: number;

  @IsCurrency({ thousands_separator: '.', decimal_separator: ',' })
  @Matches(RegExp('^((?![-]).)*$'))
  otherValue: number;

  @IsNumber()
  @Min(0)
  @Max(12)
  @Type(() => Number)
  otherInterval: number;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsNumber()
  @Min(0)
  @Type(() => Number)
  position: number;
}
