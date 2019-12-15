{
    // 状态机
    let state = function* (){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}