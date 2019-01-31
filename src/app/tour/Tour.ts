export class Tour {
  tourId: number;
  name: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  countLimit: number;


  public isAvailable(): boolean {
    const a = this.checkLimit();
    const b = !this.isGoing();

    console.log('limit ' + a);
    console.log('going ' + b);
    return a && b;
  }
  public isGoing(): boolean {
    const currentDate = new Date();
    return this.startDate <= currentDate && !this.isFinished();
  }
  public isFinished(): boolean {
    const currentDate = new Date();
    return currentDate > this.endDate;
  }
  public checkLimit(): boolean {
    return this.countLimit > 0;
  }
}
