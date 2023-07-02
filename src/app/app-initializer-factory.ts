import { UserInitializerService } from './user-initializer.service';

export function appInitializerFactory(userInitializerService: UserInitializerService): () => Promise<void> {
  return () => {
    return userInitializerService.init();
  };
}
