// Page 7
for (var i=0;i<10;i++){
    process(items[i]);
}

// variable i is still accessible here

for (let j=0;j<10;j++){
    process(items[j]);
}

// variable j is not accesible, only in the block, because it's not hoisted