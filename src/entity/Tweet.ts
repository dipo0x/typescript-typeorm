import { Entity, ObjectIdColumn, ObjectID, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity({ name: 'tweets'})
export class Tweet {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column({ type: 'varchar', length: '80'})
    title: string

    @Column({ type: 'varchar', length: '300'})
    content: string

    @ManyToOne((type) => User, (user) => user.tweets)
    user: Promise<User>;
}