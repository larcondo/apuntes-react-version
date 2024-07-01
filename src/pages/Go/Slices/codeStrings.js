export const slices1 =
`var s []string
fmt.Println("uninit:", s, s == nil, len(s) == 0)
// output: uninit: [] true true`

export const slices2 =
`s = make([]string, 3)
fmt.Println("emp:", s, "len:", len(s), "cap:", cap(s))
// output: emp: [  ] len: 3 cap: 3`

export const slices3 =
`s[0] = "a"
s[1] = "b"
s[2] = "c"
fmt.Println("set:", s)  // output: set: [a b c]
fmt.Println("get:", s[2])  // output: get: c`

export const slices4 =
`fmt.Println("len:", len(s))
// output: len: 3`

// Además de las operaciones básicas, los slices soportan mucho más lo que los hacen más ricos que los arrays.
// Una de ellas es la función integrada code(append), que devuelve un slice con uno o más valores nuevos.
// Tenemos que aceptar un valor retornado por code(append) para obtener el nuevo slice.
export const slices5 =
`s = append(s, "d")
s = append(s, "e", "f")
fmt.Println("apd:", s)
// output: apd: [a b c d e f]`

export const slices6 =
`c := make([]string, len(s))
copy(c, s)
fmt.Println("cpy:", c)
// output: cpy: [a b c d e f]`

export const slices7 =
`l := s[2:5]
fmt.Println("sl1:", l)  // output: sl1: [c d e]`

// El siguiente slice code(l) se crea a partir del slice code(s) hasta (pero excluyendo) code(s[5]).
export const slices8 =
`l = s[:5]
fmt.Println("sl2:", l)  // output: sl2: [a b c d e]`

// Y el siguiente slice se crea a partir del slice code(s) desde (e incluyendo) code(s[2]).
export const slices9 =
`l = s[2:]
fmt.Println("sl3:", l)  // output: sl3: [c d e f]`

// Podemos declarar e inicializar una variable slice en una sola línea también.
export const slices10 =
`t := []string{"g", "h", "i"}
fmt.Println("dcl:", t)  // output: dcl: [g h i]`

// El paquete code(slices) contiene un número de funciones de utilidad para los slices.
export const slices11 =
`t2 := []string{"g", "h", "i"}
if slices.Equal(t, t2) {
    fmt.Println("t == t2")
}
// output: t == t2`

// Los slices pueden estar compuestos por estructuras de datos multi-dimensionales. La longitud de los slices internos puede variar, a diferencia de los arrays multi-dimensionales.
export const slices12 =
`twoD := make([][]int, 3)
for i := 0; i < 3; i++ {
    innerLen := i + 1
    twoD[i] = make([]int, innerLen)
    for j := 0; j < innerLen; j++ {
        twoD[i][j] = i + j
    }
}
fmt.Println("2d: ", twoD)
// output: 2d:  [[0] [1 2] [2 3 4]]`

export default {
  slices1, slices2, slices3, slices4, slices5,
  slices6, slices7, slices8, slices9, slices10,
  slices11, slices12,
}