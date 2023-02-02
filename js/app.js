console.log('ciao')


for (let i = 1; i <= 100; i++) {
    console.log(i);

    const multiploDi3 = i % 3
    // console.log(i, multiploDi3);
    
    const multiploDi5 = i % 5
    // console.log(i, multiploDi5);

    const multiploDi15 = i % 15
    // console.log(i, multiploDi15);

    if (multiploDi15 === 0) {
        console.log('FizzBuzz')
    }
        else if (multiploDi5 === 0) {
            console.log('Buzz')
        }
        else if (multiploDi3 === 0) {
            console.log('Fizz')
        }
}
