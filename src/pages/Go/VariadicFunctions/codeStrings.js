export const vf1 =
`func sum(nums ...int) {
    fmt.Print(nums, " ")
    total := 0

    for _, num := range nums {
        total += num
    }
    fmt.Println(total)
}`

export const vf2 =
`sum(1, 2)  // ouput: [1 2] 3
sum(1, 2, 3)  // ouput: [1 2 3] 6

nums := []int{1, 2, 3, 4}
sum(nums...)  // ouput: [1 2 3 4] 10`

export default {
  vf1, vf2,
}