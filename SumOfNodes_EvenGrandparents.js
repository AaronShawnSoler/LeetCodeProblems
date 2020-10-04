var TreeNode =  function(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(6)
let node71 = new TreeNode(7)
let node8 = new TreeNode(8)
let node2 = new TreeNode(2)
let node72 = new TreeNode(7)
let node11 = new TreeNode(1)
let node3 = new TreeNode(3)
let node9 = new TreeNode(9)
let node12 = new TreeNode(1)
let node4 = new TreeNode(4)
let node5 = new TreeNode(5)

root.left = node71
root.right = node8

node71.left = node2
node71.right = node72

node8.left = node11
node8.right = node3

node2.left = node9
node72.left = node12
node72.right = node4
node3.right = node5


var sumEvenGrandparent = function(root) {
    // if root doesn't exist return 0
    if(!root) return 0
    
    // define left and right
    let left = root.left
    let right = root.right
    
    // if child and grandchild exist get val else set to 0
    let LL = left && left.left ? left.left.val : 0
    let LR = left && left.right ? left.right.val : 0
    let RL = right && right.left ? right.left.val : 0
    let RR = right && right.right ? right.right.val : 0
    
    let total = 0

    // update total ONLY if grandparent is even
    if(root.val % 2 == 0) {
        total = LL + LR + RL + RR
    }

    // add other grandchildren
    return total + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right)
};

console.log(sumEvenGrandparent(root))