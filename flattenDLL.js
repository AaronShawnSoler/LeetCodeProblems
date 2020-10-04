class Node {
    constructor(val, next, prev, child) {
        this.val = val
        this.next = next
        this.prev = prev
        this.child = child
    }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)
let node8 = new Node(8)
let node9 = new Node(9)
let node10 = new Node(10)
let node11 = new Node(11)
let node12 = new Node(12)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

node6.prev = node5
node5.prev = node4
node4.prev = node3
node3.prev = node2
node2.prev = node1

node7.next = node8
node8.next = node9
node9.next = node10

node10.prev = node9
node9.prev = node8
node8.prev = node7

node11.next = node12

node12.prev = node11

node3.child = node7
node8.child = node11

let flatten = function(head) {

    // recursive helper function finds tail of nested DLL and flattens
    function flattenRec(head) {
        if(!head) return null
        let curr = head
        let tail = head

        // while curr exists determine if it has a child else find next node until we find the tail
        while(curr) {
            let child = curr.child
            let next = curr.next
            if(child) {
                // get tail of DLL with no children
                tail = flattenRec(child)

                // make child next of curr and childs prev to current
                curr.next = child
                child.prev = curr

                // get rid of curr child
                curr.child = null

                // set our tail to next (could be another node or null) then if next is a node set its prev to the tail
                tail.next = next
                if(next) next.prev = tail
            } else {
                // shift to next node and when curr is null we've found the tail
                curr = next
                if(curr) tail = curr
            }
        }
        return tail
    }

    if(head) flattenRec(head)
    return head
}

flatten(node1)

function printNodes(head) {
    let curr = head
    while(curr) {
        console.log(curr)
        curr = curr.next
    }
}

printNodes(node1)