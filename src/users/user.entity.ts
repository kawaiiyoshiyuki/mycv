import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('inserted user id ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('updated user id ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Remove user id ', this.id);
  }
}
