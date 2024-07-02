export const functions1 =
`func plus(a int, b int) int {
    return a + b
}`

export const functions2 =
`func plusPlus(a, b, c int) int {
    return a + b + c
}`

export const functions3 =
`res := plus(1, 2)
fmt.Println("1+2 =", res)
// output: 1+2 = 3

res = plusPlus(1, 2, 3)
fmt.Println("1+2+3 =", res)
// output: 1+2+3 = 6`

export default {
  functions1,
  functions2,
  functions3,
}