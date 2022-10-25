import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Tweet } from "./tweet"

@Entity({ name: 'users'})
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type => Tweet, tweet => tweet.user)
    tweets: Promise<Tweet[]>;

}
