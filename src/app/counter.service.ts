export class CounterService {
  aiCounter = 0;
  iaCounter = 0;

  incrementInactive() {
    this.aiCounter++;
    console.log('Inactive count: ' + this.aiCounter);
  }

  incrementActive() {
    this.iaCounter++;
    console.log('Active count: ' + this.iaCounter);
  }
}
