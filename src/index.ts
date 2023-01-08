import { InitialsCreator } from './creators/InitialsCreator';
import {
  AvatarConfig,
  CreatorApi,
  AvatarConfigType,
  AvatarCreatorType,
} from './types';

const typeToCreatorMap = {
  initials: InitialsCreator,
  cat: InitialsCreator,
};

function createCreator(avatarConfig: AvatarConfig): CreatorApi {
  return new typeToCreatorMap[avatarConfig.type]();
}

function createAvatar<T extends AvatarCreatorType>(
  avatarConfig: AvatarConfigType<T>,
): Promise<string> {
  const creator: CreatorApi = createCreator(avatarConfig);
  return creator.createAvatar(avatarConfig);
}

export * from './types';
export default createAvatar;
