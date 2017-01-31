function randomchance(quarters, leavewith){
    while (quarters >= 0){
      if((Math.floor(Math.random()*100+1)) == 1){
        console.log('you had', quarters, 'quarters');
        quarters+=((Math.floor(Math.random()*51+50)));
        console.log('you won!');
        console.log('Your new total is', quarters, "quarters.");
      }
      quarters-=1;
      if (quarters == leavewith){
        console.log('you reached your leave amount of', quarters, 'quarters');
        console.log('you leave with', quarters, 'quarters.');
        return;
      }
      if (quarters == 0){
        console.log('no more quarters :(');
      }
    }
}
randomchance(1000, 1100);
