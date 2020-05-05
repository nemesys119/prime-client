import { PrimeResponse } from './prime-response';

describe('PrimeResponse', () => {
  it('should create an instance', () => {
    expect(new PrimeResponse(true, "7")).toBeTruthy();
  });
});
