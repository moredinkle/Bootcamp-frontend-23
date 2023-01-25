function checkPowerPoint(): any{
  return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    console.log(target.constructor.prototype);
  const childFunction = descriptor.value;
  descriptor.value = function (...args: any[]){
    const powerPoints = args[0] as number;
    if(powerPoints > 0) {
      return childFunction.apply(this, args);
    }
    else {
      return;
    }
  }
  };
}


class Pokemon {
    name: string;
    ppAvailable = 1;
    constructor(name: string, ppAvailable: number) {
      this.name = name;
      this.ppAvailable = ppAvailable;
    }

    @checkPowerPoint()
    figth(move: any) {
      console.log(`${this.name} used ${move?.name}!`);
      this.ppAvailable -= 1;
    }
  }

  const move = {name: 'thunderbolt', power: 90};
  const pikachu = new Pokemon('pikachu', 1);
  pikachu.figth(move);
  pikachu.figth(move);