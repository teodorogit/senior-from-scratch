function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor):void {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
      console.log(`Chamando ${propertyKey} da classe ${propertyKey} com argumentos: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`Resultado de ${propertyKey}: ${JSON.stringify(result)}`);
      return result;

  };

  descriptor.

}

class ValidationLogin {
  @Log
  public valid(param1: string, param2: number): string {
      return `Parâmetros recebidos: ${param1}, ${param2}`;
  }
}

const service = new ValidationLogin();
service.valid('testando', 22);
