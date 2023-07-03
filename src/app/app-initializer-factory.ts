import { UserInitializerService } from './common/services/user-initializer/user-initializer.service';

export function appInitializerFactory(userInitializerService: UserInitializerService): () => Promise<void> {
  return () => {
    return userInitializerService.init();
  };
}
