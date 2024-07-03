export const recursion1 =
`func fact(n int) int {
    if n == 0 {
        return 1
    }
    return n * fact(n-1)
}`

export const recursion2 =
`func main() {
    fmt.Println(fact(7))    // output: 5040

    var fib func(n int) int

    fib = func(n int) int {
        if n < 2 {
            return n
        }

        return fib(n-1) + fib(n-2)
    }

    fmt.Println(fib(7))     // output: 13
}`

export default {
  recursion1,
  recursion2,
}