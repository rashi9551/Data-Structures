class MinHeap {
    constructor(arr) {
      this.heap = [];
      
    }
  
    buildHeap(arr) {
      this.heap = arr;
      for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
        this.shiftDown(i);
      }
    }
  
    shiftDown(currentIndex) {
      let endIndex = this.heap.length - 1;
      let leftIndex = this.leftChild(currentIndex);
  
      while (leftIndex <= endIndex) {
        let rightIndex = this.rightChild(currentIndex);
        let indexToShift;
  
        if (rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex]) {
          indexToShift = rightIndex;
        } else {
          indexToShift = leftIndex;
        }
  
        if (this.heap[currentIndex] > this.heap[indexToShift]) {
          this.swap(this.heap, currentIndex, indexToShift);
          currentIndex = indexToShift;
          leftIndex = this.leftChild(currentIndex);
        } else {
          return;
        }
      }
    }
  
    shiftUp(currentIndex) {
      let parentIndex = this.parent(currentIndex);
      while (currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
        this.swap(this.heap, currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(currentIndex);
      }
    }
  
    peek() {
      return this.heap[0];
    }
  
    remove() {
      this.swap(this.heap, 0, this.heap.length - 1);
      this.heap.pop();
      this.shiftDown(0);
    }
  
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
    swap(a, i, j) {
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  
    leftChild(i) {
      return 2 * i + 1;
    }
  
    rightChild(i) {
      return 2 * i + 2;
    }
  
    display() {
      console.log(this.heap);
    }
  }
  
  function heapSort(m) {
    let sorted = [];
    while (m.heap.length > 0) {
      let min = m.peek();
      sorted.push(min);
      m.remove();
    }
    return sorted;
  }
  
  
let arr=[7,9,4,6,2,1]
let m = new MinHeap();
m.buildHeap(arr)
console.log(m.heap);

  

  