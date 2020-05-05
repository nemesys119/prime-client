export class PrimeResponse {
  prime: boolean;
  nextPrime: string;

  constructor(prime: boolean, nextPrime: string) {
    this.prime = prime;
    this.nextPrime = nextPrime;
  }
}
