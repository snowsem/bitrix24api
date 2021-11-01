import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Deal extends BaseEntity{

    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      title: string;
}