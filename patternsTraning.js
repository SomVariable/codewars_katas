/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// creational  /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//factory
class SimpleMembership {
    constructor(name) {
      this.name = name
      this.cost = 50
    }
  }
  
  class StandardMembership {
    constructor(name) {
      this.name = name
      this.cost = 150
    }
  }
  
  class PremiumMembership {
    constructor(name) {
      this.name = name
      this.cost = 500
    }
  }
  
  class MemberFactory {
    static list = {
      simple: SimpleMembership,
      standard: StandardMembership,
      premium: PremiumMembership
    }
  
    create(name, type = 'simple') {
      const Membership = MemberFactory.list[type] || MemberFactory.list.simple
      const member = new Membership(name)
      member.type = type
      member.define = function() {
        console.log(`${this.name} (${this.type}): ${this.cost}`)
      }
      return member
    }
  }
  
  const factory = new MemberFactory()
  
  const members = [
    factory.create('Vladilen', 'simple'),
    factory.create('Elena', 'premium'),
    factory.create('Vasilisa', 'standard'),
    factory.create('Ivan', 'premium'),
    factory.create('Petr')
  ]
  
  members.forEach(m => {
    m.define()
  })
  
  //prototype

  const car = {
    wheels: 4,
  
    init() {
      console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`)
    }
  }
  
  const carWithOwner = Object.create(car, {
    owner: {
      value: 'Дмитрий'
    }
  })
  
  console.log(carWithOwner.__proto__ === car)
  
  carWithOwner.init()


  //singleton

  class Database {
    constructor(data) {
      if (Database.exists) {
        return Database.instance
      }
      Database.instance = this
      Database.exists = true
      this.data = data
    }
  
    getData() {
      return this.data
    }
  }
  
  const mongo = new Database('MongoDB')
  console.log(mongo.getData())
  
  const mysql = new Database('MySQL')
  console.log(mysql.getData())


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// structural  /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//adapter

class OldCalc {
    operations(t1, t2, operation) {
      switch (operation) {
        case 'add': return t1 + t2
        case 'sub': return t1 - t2
        default: return NaN
      }
    }
  }
  
  class NewCalc {
    add(t1, t2) {
      return t1 + t2
    }
  
    sub(t1, t2) {
      return t1 - t2
    }
  }
  
  class CalcAdapter {
    constructor() {
      this.calc = new NewCalc()
    }
  
    operations(t1, t2, operation) {
      switch (operation) {
        case 'add': return this.calc.add(t1, t2)
        case 'sub': return this.calc.sub(t1, t2)
        default: return NaN
      }
    }
  }
  
  const oldCalc = new OldCalc()
  console.log(oldCalc.operations(10, 5, 'add'))
  
  const newCalc = new NewCalc()
  console.log(newCalc.add(10, 5))
  
  const adapter = new CalcAdapter()
  console.log(adapter.operations(25, 10, 'sub'))

  //decorator

  class Server {
    constructor(ip, port) {
      this.ip = ip
      this.port = port
    }
  
    get url() {
      return `https://${this.ip}:${this.port}`
    }
  }
  
  function aws(server) {
    server.isAWS = true
    server.awsInfo = function() {
      return server.url
    }
    return server
  }
  
  function azure(server) {
    server.isAzure = true
    server.port += 500
    return server
  }
  
  const s1 = aws(new Server('12.34.56.78', 8080))
  console.log(s1.isAWS)
  console.log(s1.awsInfo())
  
  const s2 = azure(new Server('98.87.76.12', 1000))
  console.log(s2.isAzure)
  console.log(s2.url)

  //facade

  class Complaints {
    constructor() {
      this.complaints = []
    }
  
    reply(complaint) {}
  
    add(complaint) {
      this.complaints.push(complaint)
      return this.reply(complaint)
    }
  }
  
  class ProductComplaints extends Complaints {
    reply({id, customer, details}) {
      return `Product: ${id}: ${customer} (${details})`
    }
  }
  
  class ServiceComplaints extends Complaints {
    reply({id, customer, details}) {
      return `Service: ${id}: ${customer} (${details})`
    }
  }
  
  class ComplaintRegistry {
    register(customer, type, details) {
      const id = Date.now()
      let complaint
  
      if (type === 'service') {
        complaint = new ServiceComplaints()
      } else {
        complaint = new ProductComplaints()
      }
  
      return complaint.add({id, customer, details})
    }
  }
  
  const registry = new ComplaintRegistry()
  
  console.log(registry.register('Vladilen', 'service', 'недоступен'))
  console.log(registry.register('Elena', 'product', 'вылазит ошибка'))

  //flyweight
  class Car {
    constructor(model, price) {
      this.model = model
      this.price = price
    }
  }
  
  class CarFactory {
    constructor() {
      this.cars = []
    }
  
    create(model, price) {
      const candidate = this.getCar(model)
      if (candidate) {
        return candidate
      }
  
      const newCar = new Car(model, price)
      this.cars.push(newCar)
      return newCar
    }
  
    getCar(model) {
      return this.cars.find(car => car.model === model)
    }
  }
  
//   const factory = new CarFactory()
  
//   const bmwX6 = factory.create('bmw', 10000)
//   const audi = factory.create('audi', 12000)
//   const bmwX3 = factory.create('bmw', 8000)
  
//  console.log(bmwX3 === bmwX6)

//proxy

function networkFetch(url) {
    return `${url} - Ответ с сервера`
  }
  
  const cache = new Set()
  const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
      const url = args[0]
      if (cache.has(url)) {
        return `${url} - Ответ из кэша`
      } else {
        cache.add(url)
        return Reflect.apply(target, thisArg, args)
      }
    }
  })
  
  console.log(proxiedFetch('angular.io'))
  console.log(proxiedFetch('react.io'))
  console.log(proxiedFetch('angular.io'))

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// behaviour  /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//chain_of_responsibility
class MySum {
    constructor(initialValue = 42) {
      this.sum = initialValue
    }
  
    add(value) {
      this.sum += value
      return this
    }
  }
  
  const sum1 = new MySum()
  console.log(sum1.add(8).add(10).add(1).add(9).sum)
  
  const sum2 = new MySum(0)
  console.log(sum2.add(1).add(2).add(3).sum)

//comand
class MyMath {
    constructor(initialValue = 0) {
      this.num = initialValue
    }
  
    square() {
      return this.num ** 2
    }
  
    cube() {
      return this.num ** 3
    }
  }
  
  class Command {
    constructor(subject) {
      this.subject = subject
      this.commandsExecuted = []
    }
  
    execute(command) {
      this.commandsExecuted.push(command)
      return this.subject[command]()
    }
  }
  
  const x = new Command(new MyMath(2))
  
  console.log(x.execute('square'))
  console.log(x.execute('cube'))
  
  console.log(x.commandsExecuted)

  //observer

  class Subject {
    constructor() {
      this.observers = []
    }
  
    subscribe(observer) {
      this.observers.push(observer)
    }
  
    unsubscribe(observer) {
      this.observers = this.observers.filter(obs => obs !== observer)
    }
  
    fire(action) {
      this.observers.forEach(observer => {
        observer.update(action)
      })
    }
  }
  
  class Observer {
    constructor(state = 1) {
      this.state = state
      this.initialState = state
    }
  
    update(action) {
      switch (action.type) {
        case 'INCREMENT':
          this.state = ++this.state
          break
        case 'DECREMENT':
          this.state = --this.state
          break
        case 'ADD':
          this.state += action.payload
          break
        default:
          this.state = this.initialState
      }
    }
  }
  
  const stream$ = new Subject()
  
  const obs1 = new Observer()
  const obs2 = new Observer(42)
  
  stream$.subscribe(obs1)
  stream$.subscribe(obs2)
  
  stream$.fire({type: 'INCREMENT'})
  stream$.fire({type: 'INCREMENT'})
  stream$.fire({type: 'DECREMENT'})
  stream$.fire({type: 'ADD', payload: 10})
  
  console.log(obs1.state)
  console.log(obs2.state)


  //strategy

  class Vehicle {
    travelTime() {
      return this.timeTaken
    }
  }
  
  class Bus extends Vehicle {
    constructor() {
      super()
      this.timeTaken = 10
    }
  }
  
  class Taxi extends Vehicle {
    constructor() {
      super()
      this.timeTaken = 5
    }
  }
  
  class Car extends Vehicle {
    constructor() {
      super()
      this.timeTaken = 3
    }
  }
  
  class Commute {
    travel(transport) {
      return transport.travelTime()
    }
  }
  
  const commute = new Commute()
  
  console.log(commute.travel(new Taxi()))
  console.log(commute.travel(new Bus()))
  console.log(commute.travel(new Car()))

  //template

  class Employee {
    constructor(name, salary) {
      this.name = name
      this.salary = salary
    }
  
    responsibilities() {}
  
    work() {
      return `${this.name} выполняет ${this.responsibilities()}`
    }
  
    getPaid() {
      return `${this.name} имеет ЗП ${this.salary}`
    }
  }
  
  class Developer extends Employee {
    constructor(name, salary) {
      super(name, salary)
    }
  
    responsibilities() {
      return 'процесс создания программ'
    }
  }
  
  class Tester extends Employee {
    constructor(name, salary) {
      super(name, salary)
    }
  
    responsibilities() {
      return 'процесс тестирования'
    }
  }
  
  const dev = new Developer('Владилен', 100000)
  console.log(dev.getPaid())
  console.log(dev.work())
  
  const tester = new Tester('Виктория', 90000)
  console.log(tester.getPaid())
  console.log(tester.work())
