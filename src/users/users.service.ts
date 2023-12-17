import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { usersRepository } from './repositories/users.repository';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { UserEntity } from './entities/user.entity';
// import { UnauthorizedError } from 'src/common/types/unauthorizedError';

@Injectable()
export class UsersService {
  constructor(private readonly repository: usersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto);
  }

  findAll() {
    // throw new UnauthorizedError('Nao autorizado');
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = this.repository.findOne(id);

    if (!user) throw new NotFoundError('Usuario nao encontrado.');

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
