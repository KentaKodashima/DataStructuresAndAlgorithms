class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  /**
   * Set
   * 
   * - Accepts a key and a value
   * - Hashes the key
   * - Stores the key-value pair in the hash table array via separate chaining
  */
  set(key, value) {
    const index = this._hash(key)

    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }

    this.keyMap[index].push([key, value])
  }

  /**
   * Get
   * 
   * - Accepts a key
   * - Hashes the key
   * - Retrieves the key-calue pair in the hash table
   * - If the key isn't found, returns undefined
  */
  get(key) {
    const index = this._hash(key)

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }

    return undefined
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
// console.log(ht)
console.log(ht.get("yellow"))