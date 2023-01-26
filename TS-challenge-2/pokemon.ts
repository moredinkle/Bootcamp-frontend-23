function checkPowerPoint(): Function{
  return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  const childFunction = descriptor.value;
  
  descriptor.value = function (...args: any[]){
    if(this.ppAvailable > 0) {
      return childFunction.apply(this, args);
    }
    else {
      console.log(`${this.name} has no power points left to attack :(`);
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
    figth(move: {name: string, power: number}) {
      console.log(`${this.name} used ${move?.name}!`);
      this.ppAvailable -= 1;
    }
  }

  const move = {name: 'thunderbolt', power: 90};
  const pikachu = new Pokemon('pikachu', 1);
  pikachu.figth(move);
  pikachu.figth(move);
  pikachu.figth(move);