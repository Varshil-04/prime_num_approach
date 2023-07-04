//Approach 1 => bruteforce approach
export const basicApproach = (a , b) => {
    let arr = [];
    for (let i=a; i<=b; i++) {
        if (i > 1) {
            let ip = 1;
            for (let j=2; j<i; j++) {
                if (i%j == 0) {
                    ip = 0
                    break;
                }
            }
            if (ip == 1) {
                arr.push(i);
            }
        }
    }
    return arr;
}

// Approch 2 to calculate Prime between an interval
export const betterApproach = (a , b) => {
    let arr = [];
    let i, j, flag;

    for (i=a; i<=b; i++) {
        if (i == 1 || i <= 0)
        continue;

        flag = 1;

        for (let j=2; j<=i/2; ++j) {
            if (i%j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            arr.push(i);
        }
    }
    return arr;
}

// Approch 3 to calculate Prime between an interval
export const optimizedApproach = (a , b) => {
    let arr = [];
    let i, j, flag;
    if (a <= 2) {
        a = 2;
        if (b >= 2) {
            arr.push(a);
            a++;
        }
    }
    if (a % 2 == 0)
    a++;

    for (i=a; i<=b; i=i+2) {
        flag = 1;

        for (j=2; j*j<=i; ++j) {
            if (i%j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            if (i==1) continue;
            else
            arr.push(i);
        }
    }
    return arr;
}

//Approch 4 to calculate Prime between an interval
export const modApproach = (a , b) => {
    let arr = [];
    for (let i=a; i<=b; i++) {
        let isPrime = 1;
        if (i==2 || i==3) {
            isPrime = 1;
        }
        else if (i<=1 || i%2==0 || i%3==0) {
            isPrime = 0;
        }
        for (let j=5; j*j<=i; j=j+6) {
            if (i%j==0 || i%(j+2)==0) {
                isPrime = 0
            }
        }
        if (isPrime == 1) {
            arr.push(i);
        }
    }
    return arr;
}

//Approch 5 to calculate Prime between an interval
export const sieveOfEratosthenes = (a , b) => {
    let arr = [];
    if (b < 0) {
        return arr;
    }
    else {
        let prime = new Array(b + 1)
        for (let i=2; i<=b; i++) {
            prime[i] = true;
        }
        for (let j=2; j<=b; j++) {
            if (prime[j] == true) {
                if (j >= a) {
                    arr.push(j);
                }
                for (let k=j*j; k<=b; k=k+j) {
                    prime[k] = false;
                }
            }
        }
        return arr;
    }
}