export const ranges1 =
`nums := []int{2, 3, 4}
sum := 0
for _, num := range nums {
    sum += num
}
fmt.Println("sum:", sum)
// output: sum: 9`

export const ranges2 =
`for i, num := range nums {
    if num == 3 {
        fmt.Println("index:", i)
    }
}
// output: index: 1`

export const ranges3 =
`kvs := map[string]string{"a": "apple", "b": "banana"}
for k, v := range kvs {
    fmt.Printf("%s -> %s\\n", k, v)
}
/* output:
    a -> apple
    b -> banana
*/`

export const ranges4 =
`for k := range kvs {
    fmt.Println("key:", k)
}
/* output:
    key: a
    key: b
*/`

export const ranges5 =
`for i, c := range "go" {
    fmt.Println(i, c)
}
/* output:
    0 103
    1 111
*/`

export default {
  ranges1, ranges2, ranges3,
  ranges4, ranges5
}