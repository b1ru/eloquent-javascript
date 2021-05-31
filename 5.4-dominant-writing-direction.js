function dominantDirection(s){
    counts = countBy(s, c => {
       script = characterScript(c.codePointAt(0))
       return script ? script.direction : "none"
    }).filter(x => x.name != "none")

    max = -1;
    direction = "";
    
    for (let x of counts){
        if (x.count > max){
        max = x.count;
        direction = x.name;
      }
    }
    return direction;
  }
  