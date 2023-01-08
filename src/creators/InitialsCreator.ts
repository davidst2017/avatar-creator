import { AvatarConfigInitials } from '../types';
import { Creator } from './Creator';

export class InitialsCreator extends Creator {
  defaultValue: number;
  fontSize: number;
  letterWidth: number;
  width: number;
  height: number;
  textWidth: number;
  textHeight: number;
  constructor() {
    super();
    this.defaultValue = 50;
    this.fontSize = 25;
    this.letterWidth = parseFloat((this.fontSize * 0.8).toFixed(1));
    this.textWidth = 0;
    this.textHeight = parseFloat((this.fontSize * 1.2).toFixed(1));
    this.width = this.defaultValue;
    this.height = this.defaultValue;
  }

  async createAvatar(avatarConfig: AvatarConfigInitials): Promise<string> {
    this.width = avatarConfig.width ?? this.defaultValue;
    this.height = avatarConfig.height ?? this.defaultValue;
		this.fontSize = this.width / 2 - 2.3 * avatarConfig.text.length;
    this.letterWidth = parseFloat((this.fontSize * 0.75).toFixed(1));
    this.textWidth = this.letterWidth * avatarConfig.text.length;
    this.textHeight = parseFloat((this.fontSize * 1.2).toFixed(1));
    const svg = require('svg-builder').width(this.width).height(this.height);
    svg.reset();
    let avatar =
      avatarConfig.shape === 'cricle'
        ? svg.circle({
            r: this.width / 2 - 1,
            fill: avatarConfig.backgroundColor,
            'stroke-this.width': 1,
            stroke: avatarConfig.backgroundColor,
            cx: this.width / 2,
            cy: this.height / 2,
          })
        : svg.rect({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height,
            fill: avatarConfig.backgroundColor,
            'stroke-this.width': 1,
            stroke: 'none',
          });
    avatar = avatar
      .text(
        {
          x:
            avatarConfig.text.length === 0
              ? 0
              : this.width / 2 - this.textWidth / 2,
          y: this.height / 2 + this.textHeight / 4,
          'font-family': 'helvetica',
          'font-size': this.fontSize,
          stroke: avatarConfig.forgroundColor,
          fill: avatarConfig.forgroundColor,
        },
        avatarConfig.text,
      )
      .render();
    return avatarConfig.outputFormat === 'png'
      ? super.convertSvgToPng(avatar)
      : avatar;
  }
}
