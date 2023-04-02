function myEach(collection, callback){
    if(Array.isArray(collection)){  //Object can't have a key = 0
        for (let e = 0; e < collection.length; e++){
            callback(collection[e]);
        }
    }
    else{
        for (let key in collection){
            callback(collection[key]);
        }
    }

    return collection;
}



function myMap(collection, callback){
    let array = [];

    if(Array.isArray(collection)){
        for (let e = 0; e < collection.length; e++){
            array[e]=(callback(collection[e]));
        }
    }
    else{
        for (let key in collection){
            array.push(callback(collection[key]));
        }
    }

    return array;
}



function myReduce(collection, callback, acc) {
    if(acc == undefined){
        acc = 0
    }
    let value = 0;

    if(Array.isArray(collection)){
        for (let e = 0; e < collection.length; e++){
            value += collection[e]
            console.log(value);
        }
    }
    else{
        for (let key in collection){
            value += collection[key]
        }
    }

    return callback(acc, value);
}


function myFind(collection, predicate) {
    if(Array.isArray(collection)){
        for (let e = 0; e < collection.length; e++){
            if(predicate(collection[e])==true){
                return collection[e];
            }
        }
    }
    else{
        for (let key in collection){
            if(predicate(collection[key])==true){
                return collection[key];
            }
        }
    } 
    
    return undefined;
}


function myFilter(collection, predicate){
    let array = [];

    if(Array.isArray(collection)){
        for (let e = 0; e < collection.length; e++){
            if(predicate(collection[e])==true){
                array.push(collection[e]);
            }
        }
    }
    else{
        for (let key in collection){
            if(predicate(collection[key])==true){
                array.push(collection[key]);
            }
        }
    }

    return array
}




function mySize(collection){
    let value = 0;

    if(Array.isArray(collection)){
        for (let e  of collection){
            value++;
        }
    }
    else{
        for (let key in collection){
            value++;
        }
    }

    return value;
}

function myFirst(collection, n){
    let first = [];
    

    if(Array.isArray(collection)){
        if(n == undefined){
            return collection[0]
        };
        for (let e = 0; e < n; e++){
            first.push(collection[e]);
        }
    }
    else{
        for (let key in collection){
            if(n == undefined){
                return collection[key]
            };
            let e = 0; 
            if(e < n){
                first.push(collection[key]);
                e++
            }
            else{break}
        }
    }

    return first
}

function myLast(collection, n){
    let last = [];
    let index;
    if(n == undefined){
        index = collection.length - 1
    }
    else {index = collection.length - n}

    if(Array.isArray(collection)){
        if(index == collection.length - 1){return collection[index]}

        for (index; index < collection.length; index++){
            last.push(collection[index]);
        }
    }
    else{
        for (let key in collection){
            let count = 0
            if(count < index){
                continue;
            }
            else{
                last.push(collection[key]);
            }
        }
    }

    return last
}

function myKeys(obj){
    let key = []
    for (let name in obj){
        key.push(name)
    }
    return key;
}

function myValues(obj){
    let values = []
    for (let name in obj){
        values.push(obj[name])
    }
    return values;
}