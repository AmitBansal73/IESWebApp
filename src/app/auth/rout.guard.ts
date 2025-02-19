import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const routGuard: CanActivateFn = (route, state) => {

  return true;
};
