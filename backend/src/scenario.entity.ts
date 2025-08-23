import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Scenario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}

