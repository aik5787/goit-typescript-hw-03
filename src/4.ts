class Key {
    constructor(private signature: number = Math.random()) {}
  
    getSignature(): number {
      return this.signature;
    }
  }


  class Person {
    
    constructor(private key: Key) {}
  
    getKey(): Key {
      return this.key;
    }
  }


  abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(door: boolean, key: Key) {
      this.door = door;
      this.key = key;
    }
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log('Person came in.');
      } else {
        console.log('The door is closed.');
      }
    }
  }

  class MyHouse extends House {
    constructor(key: Key) {
      super(false, key);
    }
  
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is opened.');
      } else {
        console.log('Wrong key. The door is still closed.');
      }
    }
  }



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};