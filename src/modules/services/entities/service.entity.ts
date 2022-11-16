import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  minValue: number;

  @Column()
  timeInterval: number;

  @Column()
  serviceFee: number;

  @Column()
  restroomValue: number;

  @Column()
  restroomInterval: number;

  @Column()
  kitchenValue: number;

  @Column()
  kitchenInterval: number;

  @Column()
  roomValue: number;

  @Column()
  roomInterval: number;

  @Column()
  bedroomValue: number;

  @Column()
  bedroomInterval: number;

  @Column()
  backyardValue: number;

  @Column()
  backyardInterval: number;

  @Column()
  otherValue: number;

  @Column()
  otherInterval: number;

  @Column()
  icon: string;

  @Column()
  position: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
