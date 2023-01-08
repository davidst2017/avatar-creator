export enum AvatarCreatorType {
  INITIALS = 'initials',
}
interface AvatarTypeMap{
  [AvatarCreatorType.INITIALS]: AvatarConfigInitials;
}

export type OutputFormat = 'svg' | 'png';

export interface AvatarConfig {
  type: AvatarCreatorType;
  outputFormat: OutputFormat;
  backgroundColor: string;
  forgroundColor: string;
  width?: number;
  height?: number;
}
export interface AvatarConfigInitials extends AvatarConfig {
  type: AvatarCreatorType.INITIALS;
  text: string;
  shape?: 'cricle' | 'rect';
}

export type AvatarConfigType<
  T extends AvatarCreatorType = AvatarCreatorType.INITIALS,
> = AvatarTypeMap[T];

export interface CreatorApi {
  createAvatar(avatarConfig: AvatarConfig): Promise<string>;
  convertSvgToPng(svg: string): Promise<string>;
}

export type TypeCreatorMap = Record<AvatarCreatorType, CreatorApi>;
