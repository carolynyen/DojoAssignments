function rangeprint(start,end,skip){
    if (skip==0 || skip==undefined){
      skip=1;
    if (end==undefined){
      end=start;
      start=0;
    }
    }
        for (var num = start; num < end; num +=skip) {
           console.log(num);
           }
     }
rangeprint(-2,9);
