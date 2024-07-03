export const closures1 =
`func intSeq() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}`

export const closures2 =
`nextInt := intSeq()`

export const closures3 =
`fmt.Println(nextInt()) // output: 1
fmt.Println(nextInt()) // output: 2
fmt.Println(nextInt()) // output: 3`

export const closures4 =
`newInts := intSeq()
fmt.Println(newInts()) // output: 1`

export default {
  closures1,
  closures2,
  closures3,
  closures4,
}