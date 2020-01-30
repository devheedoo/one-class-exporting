export class OneClassExporting {
  _property1: string = '';
  _property2: number = 0;

  constructor(property1?: string, property2?: number) {
    if (property1) this._property1 = property1;
    if (property2) this._property2 = property2;
  }

  setProperty1(property1: string): void {
    this._property1 = property1;
  }

  setProperty2(property2: number): void {
    this._property2 = property2;
  }

  toString(): string {
    return `${this._property1} ${this._property2}`
  }
}
