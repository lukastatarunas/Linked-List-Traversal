function LinkedList() {  
    this.head = null
}

LinkedList.prototype.push = function(val) {
    let node = {
       value: val,
       next: null
    }

    if (!this.head) {
      this.head = node      
    }

    else {
      current = this.head

      while (current.next) {
        current = current.next
      }
      
      current.next = node
    }
}

const sll = new LinkedList()

sll.push(1)
sll.push(2)
sll.push(3)
sll.push(4)
sll.push(5)

function fifthFromEnd(sll, k) {
    let node = sll.head, i = 1, fifthNode

    if (k <= 0) return

    while (node) {
        if (i === k) fifthNode = sll.head
        else if (i - k > 0) fifthNode = fifthNode.next
        i++
        node = node.next
    }

    return fifthNode
}

fifthFromEnd(sll, 5)