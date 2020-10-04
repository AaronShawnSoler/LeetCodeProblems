/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var deepestLeavesSum = function(root) {
    
    // find deepest level
    function depth(root) {
        if(!root) return 0
        let leftDepth = depth(root.left)
        let rightDepth = depth(root.right)
        
        if(leftDepth > rightDepth) {
            return leftDepth + 1
        } else {
            return rightDepth + 1
        }
    }
    let levels = depth(root)
    
    // find nodes at deepest level and add
    let sum = 0
    function sumOfNodesAtLevel(root, d) {
        if(!root) return
        if(d == 1){
            sum += root.val
        } else {
            sumOfNodesAtLevel(root.left, d-1)
            sumOfNodesAtLevel(root.right, d-1)
        }
    }
    sumOfNodesAtLevel(root, levels)
    
    return sum
};