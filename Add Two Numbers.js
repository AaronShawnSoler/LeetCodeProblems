/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // if any parameters are empty return the other list
    if(!l1) return l2
    if(!l2) return l1

    // add first two numbers and only take ones place digit
    let first = new ListNode((l1.val + l2.val) % 10)

    // determine if there is a carry
    let carry = l1.val + l2.val < 10 ? 0 : 1
    let curr = first
    
    // shift, add, carry until there's no more numbers
    while(l1.next || l2.next) {
        // shift
        l1 = l1.next ? l1.next : {val: 0}
        l2 = l2.next ? l2.next : {val: 0}
        
        // add numbers and carry and only set ones place as value
        curr.next = new ListNode((l1.val + l2.val + carry) % 10)

        // determine carry
        carry = l1.val + l2.val + carry < 10 ? 0 : 1
        
        curr = curr.next
    }
    
    // if we still have a carry add it to the end of our linked list
    carry === 1 ? curr.next = new ListNode(1) : null
    
    return first
};