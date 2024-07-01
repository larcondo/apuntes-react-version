export const maps1 =
`m := make(map[string]int)`

export const maps2 =
`m["k1"] = 7
m["k2"] = 13`

export const maps3 =
`fmt.Println("map:", m)
// output: map: map[k1:7 k2:13]`

export const maps4 =
`v1 := m["k1"]
fmt.Println("v1:", v1)
// output: v1: 7`

export const maps5 =
`v3 := m["k3"]
fmt.Println("v3:", v3)
// output: v3: 0`

export const maps6 =
`fmt.Println("len:", len(m))
// output: len: 2`

export const maps7 =
`delete(m, "k2")
fmt.Println("map:", m)
// output: map: map[k1:7]`

export const maps8 =
`clear(m)
fmt.Println("map:", m)
// output: map: map[]`

export const maps9 =
`_, prs := m["k2"]
fmt.Println("prs:", prs)
// output: prs: false`

export const maps10 =
`n := map[string]int{"foo": 1, "bar": 2}
fmt.Println("map:", n)
// output: map: map[bar:2 foo:1]`

export const maps11 =
`n2 := map[string]int{"foo": 1, "bar": 2}
if maps.Equal(n, n2) {
    fmt.Println("n == n2")
}
// output: n == n2`

export default {
  maps1, maps2, maps3, maps4,
  maps5, maps6, maps7, maps8,
  maps9, maps10, maps11,
}