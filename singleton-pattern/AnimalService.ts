export class AnimalService {
  private static instance: AnimalService;

  public name: string = "Kem";

  public static getInstance() {
    if (!this.instance) {
      this.instance = new AnimalService();
    }
    return this.instance;
  }
}