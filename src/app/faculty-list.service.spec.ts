import { TestBed } from '@angular/core/testing';

import { FacultyListService } from './faculty-list.service';

describe('FacultyListService', () => {
  let service: FacultyListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
