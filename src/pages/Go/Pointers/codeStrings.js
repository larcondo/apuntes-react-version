export const pointers1 =
`func zeroval(ival int) {
    ival = 0
}`

export const pointers2 =
`func zeroptr(iptr *int) {
    *iptr = 0
}`

export const pointers3 =
`i := 1
fmt.Println("initial:", i)

zeroval(i)
fmt.Println("zeroval:", i)

zeroptr(&i)
fmt.Println("zeroptr:", i)

fmt.Println("pointer:", &i)`

export default {
  pointers1,
  pointers2,
  pointers3,
}