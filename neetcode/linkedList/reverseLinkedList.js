// Définition d'un nœud de la liste chaînée
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Implémentation de la liste chaînée
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Méthode pour ajouter un nœud à la fin de la liste
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Méthode pour rechercher un nœud par valeur
    search(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  }
  
  // Exemple d'utilisation
  const myList = new LinkedList();
  myList.append(10);
  myList.append(20);
  myList.append(30);
  
  console.log(myList.search(20)); // Affiche : Node { value: 20, next: Node { value: 30, next: null } }
  
  
  
  
  
  