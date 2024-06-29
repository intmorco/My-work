function reload(data, component, place) {
    place.innerHTML = ""

    for (let item of data) {
        const div = component(item)

        place.append(div)
    }
}