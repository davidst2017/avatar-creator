import { AvatarConfig, CreatorApi } from '../types';
import { svg2png } from 'svg-png-converter';

export abstract class Creator implements CreatorApi {
  abstract createAvatar(avatarConfig: AvatarConfig): Promise<string>;
  async convertSvgToPng(svg: string): Promise<string> {
    let output = await svg2png({
      input: svg.trim(),
      encoding: 'dataURL',
      format: 'png',
    });
    return output;
  }
}
