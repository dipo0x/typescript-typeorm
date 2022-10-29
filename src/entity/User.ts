import { Entity, ObjectIdColumn, ObjectID, Column, OneToMany } from "typeorm"
import { Tweet } from "./Tweet"

@Entity({ name: 'users'})
export class User {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany((type) => Tweet, (tweet) => tweet.user)
    tweets: Promise<Tweet[]>;

}
