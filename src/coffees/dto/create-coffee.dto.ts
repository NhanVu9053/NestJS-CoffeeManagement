import { IsArray, IsString } from 'class-validator';

// Dto = Data transfer object
// Nó có thể xem như là 1 thứ trung chuyển từ client về server hoặc ngược lại
// Không nhất thiết phải đặt tên biến trong Dto trùng với tên cột của bảng (entity)
//  Bởi vì lợi ích của việc đặt trùng là để tránh việc map giữa biến đó và tên cột của bảng
//      Ex: CreateCoffeeDto có 1 biến là description2
//            Coffee table có 1 cột là description
//            Ở hàm update(), gọi như sau: this.coffeeRepository.create({
//                                                  ...createCoffeeDto,
//                                                  description: createCoffeeDto.description2,
//                                                  flavors,
//                                                  });
//      Ex: CreateCoffeeDto và Coffee table đều có 1 biến/cột là description
//            Với việc sử dụng ... operator, mọi việc sẽ đơn giản hơn
//            Ở hàm update(), gọi như sau: this.coffeeRepository.create({
//                                                  ...createCoffeeDto,
//                                                  flavors,
//                                                  });
export class CreateCoffeeDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;

    @IsString()
    readonly description: string;
    
    @IsArray()
    readonly flavors: string[];
}
