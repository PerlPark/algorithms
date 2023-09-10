function solution(wallpaper) {
    let lux = wallpaper.length;
    let luy = wallpaper[0].length;
    let rdx = 0;
    let rdy = 0;

    for (let x = 0; x < wallpaper.length; x += 1) {
        for (let y = 0; y < wallpaper[x].length; y += 1) {
            if (wallpaper[x][y] === "#") {
                lux = Math.min(lux, x);
                luy = Math.min(luy, y);
                rdx = Math.max(rdx, x + 1);
                rdy = Math.max(rdy, y + 1);
            }
        }
    }

    return [lux, luy, rdx, rdy];
}