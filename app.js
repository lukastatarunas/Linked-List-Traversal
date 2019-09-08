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
sll.push(6)
sll.push(7)
sll.push(8)
sll.push(9)
sll.push(10)
sll.push(11)
sll.push(12)
sll.push(13)
sll.push(14)
sll.push(15)
sll.push(16)

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