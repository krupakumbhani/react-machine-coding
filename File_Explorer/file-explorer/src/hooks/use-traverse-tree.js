

const useTraverseTree = () => {
    const insertNode = (tree, folderId, item, isFolder) => {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder: isFolder,
                items: []
            })
            return tree
        }
        let latestNode = []
        latestNode = tree.items.map((ob) => {
            return insertNode(ob, folderId, item, isFolder)
        })
        return { ...tree, items: latestNode }
    }
    const deleteNode = (tree, folderId) => {
    //     if (tree.id === folderId) {
    //         return null;
    //       }
      
    //       let filteredTree = [];
    //       filteredTree = tree.items
    //         .filter((item) => item.id !== folderId)
    //         .map((item) => deleteNode(item, folderId));
      
    //       return { ...tree, items: filteredTree };
    }
    
    function updateNode(tree, id, item) {
        if (tree.id === id) {
          tree.name = item;
          return tree;
        }
    
        const updatedNode = tree.items.map((obj) => updateNode(obj, id, item));
        return { ...tree, items: updatedNode };
      }
    return { insertNode, deleteNode }
}

export default useTraverseTree