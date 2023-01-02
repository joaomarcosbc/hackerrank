function diagonalDifference(arr: number[][]): number {

    let left = 0
    let right = 0
    const length = arr.length
    
    for(let i=0; i < arr.length; i++) {
        left += arr[i][i]
        right += arr[i][(length - 1) - i]
    }
    
    return Math.abs(left - right)
}
