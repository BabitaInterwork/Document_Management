import { TestBed } from '@angular/core/testing';

import { DocRequestService } from './doc-request.service';

describe('DocRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocRequestService = TestBed.get(DocRequestService);
    expect(service).toBeTruthy();
  });
});
