# Data Structures
Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

## Singly Linked List
A data structure that contains a head, tail and length property. Linked lists consist of nodes, and each node has a value and a pointer to another node or null.

### Comparisons with Arrays
#### Lists
- Do not have indices
- Connected via nodes with a next pointer
- Random access is not allowed

#### Arrays
- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

### Time complexity
- Insertion: O(1)
- Removal: O(1) or O(n)
- Searching: O(n)
- Access: O(n)



## Doubly Linked List
Doubly linked lists are almost identical to singly linked lists. However, every node in doubly linked lists has another pointer to the previous node. Therefore, finding nodes can be done in half time of singly linked lists. However, they take up more memory considering the extra pointer.

### Time complexity
- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(n)




## Stack
Stack is a FIFO data structure. The last element added to the stack will be the first element removed from the stack.

It can be implemented easily using an array (push/pop). However, a stack doesn't need to have indices. In this case, implementing a **linked list** with shift and unshift can be more efficient.

### Use cases
- Managing function invocations
- Undo / Redo actions (like in Photoshop)
- Routing (the history object)

### Time complexity
- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(n)




## Queue
Queue is a FIFO data structure. The first element added to the queue will be the first element removed from the queue.

Just like stack, it can be implemented easily using an array (push/shift). However, a queue doesn't need to have indices. In this case, implementing a **linked list** with push and shift can be more efficient.

### Use cases
- Background tasks
- Uploading resources
- Print queue
- Task processing
- Download queue (the completion order might be different)

### Time complexity
- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(n)




## Trees
Tree is a data structure that consists of nodes in a parent/child(s) relationship.

**Features**
- Non-linear data structures that contain a root and child nodes
- Binary trees can have values of any type, but at most two children for each parent
- Binary search trees are a more specific versionn of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
- We can search through trees using BFS and DFS

**Terminologies**
- Root - The top node in a tree
- Child - A node directly connected to another node when moving away from the root
- Parent - The converse notion of a child
- Sibilings - A group of nodes with the same parent
- Leaf - A node with no children
- Edge - The connection between one node and another

**Use cases**
- HTML DOM
- Network routing
- Abstract syntax tree
- Artificial intelligence (CPU in games/decision trees)
- Computer file systems
- JSON

**Kinds of trees**
- Trees
- Binary trees
- Binary search trees

### Binary trees
In a binary tree, each node can have only 2 children.

### Binary search trees
Just like in a binary tree, each node can have only 2 children in a binary search trees. In addition, in a binary tree, every node to the left of a parent node is **always less** than the parent, and every node to the right of a parent node is **always greater** than the parent.

#### Why use binary search trees?
- Easy to look things up
- Easy to insert things
- Search can be very quick compared to un-sorted trees

#### Time complexity
- Insertion: O(log n)
- Searching: O(log n)

### Tree traversal
There are some ways to vist every node only once.

#### Breath first search
BFS looks up every node in the same level before it looks node's children.

#### Depth first search
DFS searches all nodes down to the end before visiting sibiling nodes.

- Pre order
Visit the node first, then explore the entire left side and move on to the entire right.

Pre order DFS can be used to "export" a tree structure so that it is easily reconstructed or copied.

- Post order
Explore the entire left side and visit the nodes, explore the entire right nodes and visit the nodes, then visit the parent nodes.

- In order
Explore the entire left side and visit the node, then go back and visit the parent node, and explore the right side of the node and visit.

In order DFS can be used commonly with BSTs. We get all nodes in the tree in their underlying order. 

#### BFS vs DFS
Time complexity is the same because they visit every  single node after all. However, it depends on the tree's structure when it comes to space complexity. For the wide trees, deapth fist search will work better because it stores less nodes in a queue at a time. For the vertically long trees, breath first search will work better for the same reason.




## Binary heaps
Binary heaps are similar to a binary search tree, but they have some different rules. They are very useful data structures for sroting and implementing other data structures like priority queues.

In a **max binary heap**, parent nodes are always larger than child nodes. In a **min binnary heap**, parent nodes are always smaller than child nodes.

### Time complexity
- Insertion: O(log n)
- Removal: O(log n)
- Searching: O(n)

For 16 elements, 4 comparisons...

### Max binary heap
- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max binary heap, the parent is greater than the children, but there are no gurantees between sibiling nodes
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

### Why use binary heaps?
Binary heaps are used to implement Priority Queues, which are very commonly used data structures. They are also used quite a bit with Graph Traversasl algorithms.

### Representing a heap in code

- Find a child from a parent
For any index of an array **n**, the left child is stored at **2n + 1** and the right child is at **2n + 2**.

- Find a parent from a child
For any child node at index n, its parent is at index **(n - 1) / 2** (it has to be floored).

### Priority queue
Priority queue is a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.




## Hash tables
Hash tables are used to store key-value pairs. They are like arrays, but the keys are not ordered. Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values and removing values.

### Time complexity
- Insertion: O(1)
- Deletion: O(1)
- Access: O(1)

### Use cases
- Dictionaries in Python and Swift
- bjects and Maps in JS
- Maps in Java, Go and Scala
- Hases in Ruby

### Dealing with collisions
Even with a large array and a great hash function, collisions are inevitable. There are many strategies for dealing with collisions.

#### Separate chaining
With sepatate chaining, at each index in our array we store values using a more sophisticated data structure(e.g. an array or a linked list). Thsi allows us to store multiple key-value pairs at the same index.

#### Linear probing
With linear probing, when we find a collision, we search through the array to find the next empty slot. Unlike with separate chaining, this allows us to store a single key-value at each index.




## Graphs
A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

### Use cases
- Social networks (recommendations)
- Location / mapping
- Routing algorithms
- Visual hierarchy
- File system optimizations

### Graph terminology
- Vertex - a node
- Edge - connection between nodes
- Wighted / Unweighted - values assigned to distances
between vertices

### Types of graphs
#### Undirected graph
Edges don't have any directions. It is useful for cases like SNS friends logic.

#### Directed graph
Edges have spesific directions assigned to the edge. It is useful for cases like SNS fllowing logic.

#### Weighted graph
Each edge has a value assigned to them. It is useful for cases like map directions.

### Ways to store graphs
#### Adjacency matrix
1 in the table below means there is an edge between the two vertices.

|  -  |  A  |  B  |  C  |  D  |  E  |  F  |
| --- | --- | --- | --- | --- | --- | --- |
|  A  |  0  |  1  |  0  |  0  |  0  |  1  |
|  B  |  1  |  0  |  1  |  0  |  0  |  0  |
|  C  |  0  |  1  |  0  |  1  |  0  |  0  |
|  D  |  0  |  0  |  1  |  0  |  1  |  0  |
|  E  |  0  |  0  |  0  |  1  |  0  |  1  |
|  F  |  1  |  0  |  0  |  0  |  1  |  0  |

#### Adjacency List
Each key or index represent a vertex. And cooresponding values are the vertices connected with the vertex.

```
// Integer values
[
  [1,5], // Vertex: 0
  [0,2], // Vertex: 1
  [1,3], // Vertex: 2
  [2,4], // Vertex: 3
  [3,5], // Vertex: 4
  [4,0], // Vertex: 5
]

// String values
[
  A: ['B','F'],
  B: ['A','C'],
  C: ['B','D'],
  D: ['C','E'],
  E: ['D','F'],
  F: ['E','A'],
]
```

### Time complexities
|V| - Number of vertices  
|E| - Number of edges

|  Operation      |  Adjacency List  |  Adjacency Matrix  |
|  -------------  |  --------------  |  ----------------  |
|  Add vertex     |  O(1)            |  O(|V^2|)          |
|  Add edge       |  O(1)            |  O(1)              |
|  Remove vertex  |  O(|V| + |E|)    |  O(|V^2|)          |
|  Remove edge    |  O(|E|)          |  O(1)              |
|  Query          |  O(|V| + |E|)    |  O(1)              |
|  Storage        |  O(|V| + |E|)    |  O(|V^2|)          |

### Adjacency matrix vs adjacency list
#### Adjacency
- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

#### Adjacency list
- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookkup specific edge

#### Which is more common?
Adjacency list is a common choice because most data in the real-world tends to lend itself to sparser and/or larger graphs.




## Graph Traversal
Graph traversal includes visiting, updating, checking eaxh vertex in a graph.

### Use cases
- Peer to peer networking
- Web crawlers
- Finding the closest matches/recommendations
- Shortest path problems
    - GPS navigation
    - Solving mazes
    - AI (shortest path to win the game)

### Depth First Graph Traversal
Starting from the vertex that you choose, visit all neighbours of the first neighbour before visiting its neighbours.

### Breath First Graph Traversal
Starting from the vertex that you choose, visit all neighbours at the current depth before visiting neighbours of neighbours.