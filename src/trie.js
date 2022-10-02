/**
 * @copyright 2022 Omprakash Selvaraj <cse.omprakash@gmail.com>
 * @license MIT
 */

/**
 * @class Trie
 */
 class Trie{

    #children;
    #isWord;

    constructor(){
        this.#children =  new Map();
        this.#isWord = false;
    }

    /** 
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this;
        word.split('').forEach((letter,idx)=>{
            !node.#children.has(letter)?node.#children.set(letter, new Trie()):null;
            node = node.#children.get(letter);
        });
        node.#isWord = true; 
    };

    /** 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this;
        for(let i=0; i<word.length; i++){
            let letter = word[i];
            if(!node.#children.has(letter))
                return false;
            node = node.#children.get(letter);
        }
        
        return node.#isWord;
    };

    /** 
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this;
        for(let i=0; i<prefix.length; i++){
            let letter = prefix[i];
            if(!node.#children.has(letter))
                return false;
            node = node.#children.get(letter);
        }
        
        return true;
    };

    /** 
     * @param {string} prefix
     * @return {string[]}
    */
    findAllMatches(prefix) {
        let matches = []
        let node = this;
        for(let i=0; i<prefix.length; i++){

            let letter = prefix[i];
            if(!node.#children.has(letter))
                return matches;

            node = node.#children.get(letter);
        }

        let dfs=(node, breadCrumb)=>{
            if(node.#isWord)
                matches.push(breadCrumb);
            node.#children.forEach((childNode, key)=>{
                dfs(childNode, breadCrumb+key);
            });
        };

        dfs(node, prefix);

        return matches;
    }

}

exports.Trie = Trie;
