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
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef": ["e","ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeeee"],
  };

type ConstructionPossible = (objectif: string, alphabet: Array<string>) => boolean

const constructionPossible: ConstructionPossible = (objectif: string, alphabet: Array<string>): boolean =>{
    if(objectif === ""){
        return true
    }
    for (let element of alphabet){
        if(objectif.indexOf(element) === 0){
            const reste = objectif.slice(element.length)
            if(constructionPossible(reste, alphabet)){
                return true
            }
        }
    }
    return false
}

function bench (problemes: {[p: string]: Array<string>}){
    for (const objectif in problemes){
        const alphabet = problemes[objectif]
        console.log(`"${objectif}" -> ${constructionPossible(objectif,alphabet)}`);
    }
}

bench(problemesFaciles)