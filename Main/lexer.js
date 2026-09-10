
let source  = "let x = 5 + 3;";
let pos = 0; // index 
// advance() it take the char from your currect pos and make you move one index -> give me the char at poss 1 and move poss by 1 


// ! making my own  func 

function advance () { 
    pos++;
    return source[pos-1];
}

function peek () { 
    return source[pos];
}

function atEnd () { 
    if (pos === (source.length)) { 
        return true;
    }else { 
        return false;

    }
}


// ! main 

while(!atEnd()) {
    let char = advance();
    if (char === "+") { 
        console.log("PLUS");

    }else if (char === "-")  { 
        console.log("SUB");

    }else if (char === "*") { 
        console.log("MULTI");

    }else if (char === "%") { 
        console.log("REMAINDER(MODULO)");

    }else if (char === "/"){
        console.log("DIV");

    }else if (char === "=") { 
        console.log("ASSIGN");

    }else if (char === "(") { 
        console.log("OPEN-BRACE");

    }else if (char === ")") { 
        console.log("CLOSE-BRACE");

    }else if (char === "{") { 
        console.log("OPEN-BRACE");

    }else if (char === "}") { 
        console.log("CLOSE-BRACE");

    }else if (char === ";") { 
        console.log("SEMICOLON");

    }else if (char ===",") { 
        console.log("COMMA");

    }else if (char === "[") { 
        console.log("OPEN-BRACE");

    }else if (char === "]") { 
        console.log("CLOSE-BRACE");


    }
}