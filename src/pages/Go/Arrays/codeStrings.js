export const arrays1 =
`var a [5]int
fmt.Println("emp:", a)
// output: emp: [0 0 0 0 0]`

export const arrays2 =
` a[4] = 100
fmt.Println("set:", a)
fmt.Println("get:", a[4])
// output: set: [0 0 0 0 100]
// output: get: 100`

export const arrays3 =
`fmt.Println("len:", len(a))
// output: len: 5`

export const arrays4 =
`b := [5]int{1, 2, 3, 4, 5}
fmt.Println("dcl:", b)
// output: dcl: [1 2 3 4 5]`

export const arrays5 =
`b = [...]int{1, 2, 3, 4, 5}
fmt.Println("dcl:", b)
// output: dcl: [1 2 3 4 5]`

export const arrays6 =
`b = [...]int{100, 3: 400, 500}
fmt.Println("idx:", b)
// output: idx: [100 0 0 400 500]`

export const arrays7 =
`var twoD [2][3]int
for i := 0; i < 2; i++ {
    for j := 0; j < 3; j++ {
        twoD[i][j] = i + j
    }
}
fmt.Println("2d: ", twoD)
// output: 2d:  [[0 1 2] [1 2 3]]`

export const arrays8 =
`twoD = [2][3]int{
    {1, 2, 3},
    {1, 2, 3},
}
fmt.Println("2d: ", twoD)
// output: 2d:  [[1 2 3] [1 2 3]]`

export default {
  arrays1, arrays2, arrays3, arrays4,
  arrays5, arrays6, arrays7, arrays8
}