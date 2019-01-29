export class Tour {
  tourId: number;
  name: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  countLimit: number;

  public isAvailable(): boolean {
    return this.checkDate() && this.checkLimit();
  }
  public checkDate(): boolean {
    const currentDate = new Date();
    return this.startDate >= currentDate;
  }
  public checkLimit(): boolean {
    return this.countLimit > 0;
  }
}
