# Avatar creator

Creates UI avatars like: ![Avatar icon](./assets/img1.png) or ![Avatar icon](./assets/img2.png) 

It's just like (UI avatars)[https://ui-avatars.com/], which is a great service. So use it!

However, if your project does not allow you to rely on an external service and want to create avatars with node, this lib is a great alternative.

## Install

`npm i avatar-creator --save`

## Usage

```
const svg = await createAvatar({
		type: AvatarCreatorType.INITIALS,
		outputFormat: 'png',
		backgroundColor: '#12ff55',
		forgroundColor: '#993322',
		text: "DS"
	})
```

## Extend avatar creators

Run dev server with `npm dev`. Dev server starts on port 3334. (http://localhost:3334)[http://localhost:3334]

Add a new avatar creator to the creators folder and start implementing it. Whenever you make a change the page will refresh automatically. 
