for (let i=1; i<100; ++i ){
    switch (true) {
        case i%21===0:
            console.log('OpenSource');
            break;
        case i%3===0:
            console.log('Open');
            break;
        case i%7===0:
            console.log('Source');
            break;
        default:
            console.log(i);
    }
}