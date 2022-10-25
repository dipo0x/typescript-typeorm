import { getRepository } from "typeorm"
import { User } from "./entity/User"
import { Tweet } from "./Tweet"

export const Bootstrap = async () => {
	const userRepo = getRepository(User);
	const user = userRepo.create({ firstName: 'Oladipo', lastName: 'Adesiyan', age: 2});
	await userRepo.save(user).catch((err) => {
		console.log(err)
	})
	console.log("New User Saved", user);

	const tweetRepo = getRepository(Tweet);
	const tweet = new Tweet();
	tweet.title = 'I finally got a new job'
	tweet.content = 'Yo!, y'all, I finally got a job at Apple!'
	tweet.user = Promise.resolve(user);
	await tweetRepo.save(tweet).catch((err) => console.log(err))
}

export const find = async () => {
	const userRepo = getRepository(User);
	const user = await userRepo.find({ where: { firstName: "Alex" } }).catch((err) => {
		console.log(err)
	})
	if(user)
	console.log('User:', user, await user.tweets)
}