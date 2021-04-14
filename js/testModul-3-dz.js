const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
    removePotion(potionName) {
  
        // const { potions: { a, b, с } } = atTheOldToad;
        // console.log(a);
  

        for (const obj of this.potions) {
            // console.log(obj);

            if (obj.name === potionName) {
                   const potionIndex = obj.name.indexOf(potionName);
          
              if (potionIndex === -1) {
                return `Зелья ${potionName} нет в инвентаре!`;
              }
          
              obj.splice(potionIndex, 1);
    //       }
            }
            console.log(obj);
        }


        //   for (const obj in this.potions) {
    //       if (obj.hasOwnProperty(potionName)) {
    //           const element = this.potions[obj];
    //           console.log(element);

    //           const potionIndex = this.potions.obj.indexOf(potionName);
          
    //           if (potionIndex === -1) {
    //             return `Зелья ${potionName} нет в инвентаре!`;
    //           }
          
    //           this.potions.obj.splice(potionIndex, 1);
    //       }
    //   }
    },
    
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Пиши код выше этой строки
};

// console.log(atTheOldToad.removePotion('Каменная кожа'));
atTheOldToad.removePotion('Дыхание дракона')
// console.log(atTheOldToad.potions);

// console.log(atTheOldToad.removePotion('Дыхание дракона'));