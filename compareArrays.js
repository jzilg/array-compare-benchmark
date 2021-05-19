const { difference } = require('lodash')

// not as fast as get_differences_from_arrays but just build with lodash
const compareArrays = (array0, array1) => {
    const just_in_a = difference(array0, array1)
    const just_in_b = difference(array1, array0)
    const inside_ab = difference([...array0, ...array1], [...just_in_a, ...just_in_b])

    return {
        just_in_a,
        just_in_b,
        inside_ab,
    }
}

// very slow
const compareArrays1 = (array0, array1) => {
    array0.sort()
    array1.sort()

    const just_in_a = []
    const inside_ab = []

    const array1WithFlag = array1.map((entry) => {
        return {
            value: entry,
            isInArray0: false,
        }
    })

    array0.forEach((entry0) => {
        const entryIsInArray1 = array1WithFlag.some((entry1) => {
            const matched = entry0 === entry1.value

            if (matched) {
                entry1.isInArray0 = true
            }

            return matched
        })

        if (entryIsInArray1) {
            inside_ab.push(entry0)
        } else {
            just_in_a.push(entry0)
        }
    })

    const just_in_b = array1WithFlag
        .filter((entry) => !entry.isInArray0)
        .map((entry) => entry.value)

    return {
        just_in_a,
        just_in_b,
        inside_ab,
    }
}

module.exports = {
    compareArrays,
    compareArrays1,
}
