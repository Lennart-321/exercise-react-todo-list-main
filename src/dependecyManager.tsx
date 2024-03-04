const glbDependencyData: any = {};
export function setListner(name: string, origin: string, callback: (x: any) => any, data: any = undefined) {
    if (!glbDependencyData[name]) {
        glbDependencyData[name] = { data: null };
    }
    glbDependencyData[name][origin] = callback;
    if (data !== undefined) {
        glbDependencyData[name].data = data;
    }
}
export function getData(name: string): any {
    return glbDependencyData[name] ? glbDependencyData[name].data : null;
}
export function dataChanged(name: string, newData: any) {
    console.log(name, newData);
    if (!glbDependencyData[name]) {
        glbDependencyData[name] = { data: null };
    }
    glbDependencyData[name].data = newData;
    for (let dep in glbDependencyData[name]) {
        if (dep === "data") continue;
        console.log("Dep", dep, glbDependencyData[name][dep]);
        glbDependencyData[name][dep](newData);
    }
}
