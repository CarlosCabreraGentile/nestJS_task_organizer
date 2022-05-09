import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // { eager: true } when you get the user from the db, we also fetch the task automatically
  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
