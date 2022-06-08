const tamogotchi = {
  name: 'Islam',
  meal: 3,
  energy: 3,
  mood: 3,
   getStatus: function() {
    let meal = '';
    let energy = '';
    let mood = ''
    if (this.meal < 3) {
      meal += `Я голоден (${this.meal})`
    } else {
      meal += `Я не голоден (${this.meal})`
    } if (this.energy < 3) {
      energy += `Я хочу спать (${this.energy})`
    } else {
      energy += `Я не хочу спать (${this.energy})`
    } if (this.mood < 3) {
      mood += `Мне скучно (${this.mood})`
    } else {
      mood += `Мне весело (${this.mood})`
    }
    let dead = ''
    if (this.meal <= 0) {
      dead += `${this.name} умер :(`
    } else if (this.energy <= 0) {
      dead += `${this.name} умер :(`
    } else if (this.mood <= 0) {
      dead += `${this.name} умер :(`
    }
    else {
      dead += `Имя: ${this.name} Живее всех живых :)`
    }
     let life = '';
     if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
       life += `Признаки жизни отсутсвуют`
     } else {
       life += `Признаки жизни есть`
     }
     let str =`${dead} , Еда: ${meal}, Энергия: ${energy}, Настроение: ${mood}, ${life}`
     return str 
  },
  setName: function(name) {
    this.name = name
  },
  eat: function() {
    if (this.meal < 5) {
      this.meal++
    } else {
      this.mood--
    }
  },
  sleep: function() {
    if (this.energy < 5) {
      this.energy++
    } else {
      this.meal--
    }
  },
  play: function() {
    if (this.play < 5) {
      this.play++
    } else {
      this.energy--
    }
  }
}
tamogotchi.sleep();
console.log(tamogotchi.getStatus())


// Имя: Тамик, Еда: Я голоден (1), Энергия: Я не хочу спать (3), Настроение: Мне весело (4).
