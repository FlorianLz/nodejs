const problemesFaciles: {
    [objectifs: string]: Array<string>;
  } = {
    "": ["bla", "bl", "a"],
    "abcdef": ["ab", "abc", "cd", "def", "abcd"],
    "skateboard": ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
    "enterapotentpot": ["a", "p", "ent", "enter", "ot", "o", "t"],
  };
  const problemesDifficile: {
    [objectifs: string]: Array<string>;
  } = {
    "eeeeeeeeeeeeeeeeeeeeeeeeeef": ["e","ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeeee"],
  };

type ConstructionPossible = (objectif: string, alphabet: Array<string>) => boolean

const constructionPossible: ConstructionPossible = (objectif: string, alphabet: Array<string>, memo: {[objectif: string]: boolean} = {}): boolean =>{
    if(objectif in memo){
        return memo[objectif]
    }
    if(objectif === ""){
        return true
    }
    for (let element of alphabet){
        if(objectif.indexOf(element) === 0){
            const reste = objectif.slice(element.length)
            if(constructionPossible(reste, alphabet)){
                memo[objectif] = true
                return true
            }
        }
    }
    memo[objectif] = false
    return false
}

function bench (problemes: {[p: string]: Array<string>}){
    for (const objectif in problemes){
        const alphabet = problemes[objectif]
        console.log(`"${objectif}" -> ${constructionPossible(objectif,alphabet)}`);
    }
}

bench(problemesDifficile)