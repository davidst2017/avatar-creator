import express from 'express';
import createAvatar from '../src';
import { AvatarCreatorType, AvatarConfigInitials } from '../src/types';

const PORT = 3334;
const app = express();

app.get('/', async (req, res) => {
  const svg = await createAvatar({
    type: AvatarCreatorType.INITIALS,
    outputFormat: 'svg',
    backgroundColor: '#12ff55',
    forgroundColor: '#993322',
    text: 'DS',
    width: 50,
    height: 50,
  });
  const png = await createAvatar({
    type: AvatarCreatorType.INITIALS,
    outputFormat: 'png',
    backgroundColor: '#12ff55',
    forgroundColor: '#993322',
    text: 'DS',
    width: 50,
    height: 50,
  });

  const svgCircle = await createAvatar({
    type: AvatarCreatorType.INITIALS,
    outputFormat: 'svg',
    backgroundColor: '#000',
    forgroundColor: '#fff',
    text: 'DNN',
    shape: 'cricle',
    width: 50,
    height: 50,
  } as AvatarConfigInitials);
  const svgCirclePng = await createAvatar({
    type: AvatarCreatorType.INITIALS,
    outputFormat: 'png',
    backgroundColor: '#000',
    forgroundColor: '#fff',
    text: 'DNN',
    shape: 'cricle',
    width: 50,
    height: 50,
  } as AvatarConfigInitials);
  res.send(`<html>
	<body>
	<p>Svg:</p>
	${svg}
	<br />
	<p>Circle:</p>
	${svgCircle}
	<br />
	<p>Circle PNG:</p>
	<img src="${svgCirclePng}" />
	<br />
	<p>Png:</p>
	<img src="${png}" />
	<script src="${process.env.BROWSER_REFRESH_URL}">
	</script>
	</body>
	</html>`);
});

app.listen(PORT, () => {
  console.info(`server started on port ${PORT}`);
});
