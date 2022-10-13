function solution(new_id) {
    new_id = new_id.toLowerCase()
            .replace(/[^\w-.]/g, "")
            .replace(/\.+/g, ".")
            .replace(/^\.+|\.+$/g, "");
    new_id = new_id === "" ? "a" : new_id;
    new_id = new_id.length > 15 ? new_id.slice(0, 15).replace(/\.+$/g, "") : new_id;
    while (new_id.length < 3)
        new_id = new_id.concat(new_id[new_id.length - 1]);
    return new_id;
}