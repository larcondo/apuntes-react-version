export const mrv1 =
`func vals() (int, int) {
    return 3, 7
}`

export const mrv2 =
`a, b := vals()
fmt.Println(a)  // output: 3
fmt.Println(b)  // output: 7`

export const mrv3 =
`_, c := vals()
fmt.Println(c)  // output: 7`

export default {
  mrv1,
  mrv2,
  mrv3,
}