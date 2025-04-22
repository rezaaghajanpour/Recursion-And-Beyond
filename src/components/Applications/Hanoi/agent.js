/*
All you need for this assignment is to complete the functions in this file.
These functions implement different variations of the Tower of Hanoi problem.

1. `hanoi(from, via, to, n, moves)`: This is the standard Tower of Hanoi problem.
   - `from`: The rod where the disks start.
   - `via`: The rod used as an intermediate step.
   - `to`: The rod where the disks should be moved.
   - `n`: The number of disks to move.
   - `moves`: An array where each move is stored as a pair [source, destination].

   In this function, you need to write the algorithm to move `n` disks from the `from` rod to the `to` rod using the `via` rod as an intermediary. Remember the base case when `n == 1`, where you can directly move the disk from `from` to `to`. For more than one disk, you'll need to:
   - Move `n-1` disks from `from` to `via` using `to` as an intermediary.
   - Move the nth disk from `from` to `to`.
   - Move the `n-1` disks from `via` to `to` using `from` as an intermediary.
   - Push each move into the `moves` array using `moves.push([A, B])`.

2. `exhanoi_1(A, B, C, n, moves)`: This is a variant of the Tower of Hanoi problem.
   - Think of this as an extension where you might have an extra step or rule.
   - You will need to come up with a strategy that is slightly different from the standard hanoi problem.
   - Write the pseudocode first to understand the flow before converting it to real code.

3. `exhanoi_2(A, B, C, n, moves)`: Another variant.
   - In this variant, think about a different rule or constraint that might be applied.
   - Consider what changes if, for example, you have an additional rod, or if there's a different order in which disks can be moved.
   - Again, pseudocode will help you outline the steps before coding.

4. `exhanoi_3(A, B, C, n, moves)`: Yet another variant.
   - This variant could involve specific constraints, such as limiting the number of moves.
   - Break down the problem into manageable pieces with pseudocode before implementing it.


5. `exhanoi_4(A, B, C, n, moves)`: The final variant.
   - This might involve a more complex variation where multiple rods are used in different ways.
   - Plan how the moves will differ from the standard problem.
   - Focus on the logic and try to implement it step by step, testing as you go.

Remember:
- Start by writing pseudocode for each function. Pseudocode is a plain language description of the steps in the algorithm.
- Once you have the pseudocode, translate it into actual JavaScript code.
- Use the `moves.push([A, B])` command to record each move.
- Test your functions with different values of `n` to ensure they work correctly.
*/

// Example pseudocode for hanoi function:
// function hanoi(from, via, to, n, moves) {
//     if n == 1: 
//         move disk from `from` to `to`
//     else:
//         hanoi(from, to, via, n-1, moves)    // Step 1: Move n-1 disks from `from` to `via`
//         move the nth disk from `from` to `to`  // Step 2: Move the nth disk from `from` to `to`
//         hanoi(via, from, to, n-1, moves)    // Step 3: Move n-1 disks from `via` to `to`
// }
 
export const hanoi = (from, via, to, n, moves) => {
   if (n === 1) {
       moves.push([from, to]);
       return;
   }

   hanoi(from, to, via, n - 1, moves);
   moves.push([from, to]);
   hanoi(via, from, to, n - 1, moves);
};

export const exhanoi_1 = (A, B, C, n, moves) => {
   const transfer = () => {
       hanoi(C, A, B, 3 * n - 1, moves);
       moves.push([A, C]);
       hanoi(B, A, C, 3 * n - 1, moves);
   };

   if (n === 1) {
       hanoi(C, A, B, 2, moves);
       moves.push([A, C]);
       hanoi(B, A, C, 2, moves);
   } else {
       exhanoi_1(A, B, C, n - 1, moves);
       transfer();
   }
};

export const exhanoi_2 = (A, B, C, n, moves) => {
   if (n === 1) {
       moves.push([A, C], [B, C]);
       return;
   }

   exhanoi_2(A, B, C, n - 1, moves);
   hanoi(C, A, B, 2 * n - 2, moves);
   moves.push([A, C]);
   hanoi(B, A, C, 2 * n - 1, moves);
};

export const exhanoi_3 = (A, B, C, n, moves) => {
   if (n === 1) {
       moves.push([C, B], [A, B]);
       hanoi(B, A, C, 3, moves);
       return;
   }

   exhanoi_3(A, B, C, n - 1, moves);
   hanoi(C, B, A, 3 * n - 3, moves);
   moves.push([C, B]);
   hanoi(A, C, B, 3 * n - 2, moves);
   hanoi(B, A, C, 3 * n, moves);
};

export const exhanoi_4 = (A, B, C, n, moves) => {
   if (n === 1) {
       moves.push([C, B]);
       hanoi(B, C, A, 3, moves);
       hanoi(A, B, C, 6, moves);
       return;
   }

   exhanoi_4(A, B, C, n - 1, moves);
   hanoi(C, A, B, 6 * n - 5, moves);
   hanoi(B, C, A, 6 * n - 3, moves);
   hanoi(A, B, C, 6 * n, moves);
};
