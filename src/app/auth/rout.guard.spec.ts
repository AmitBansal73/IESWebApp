import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routGuard } from './rout.guard';

describe('routGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
