let msg = "#"

while (msg.length <= 7){
    console.log(msg)
    msg += "#"
}

// book solution
//  more elegant
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);