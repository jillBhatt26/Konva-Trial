const getColor = (r, g, b) => {
    let color = [r, g, b]
        .map(c => {
            // convert the given code to base
            const toHex = c.toString(16);

            // if the value is a single digit append a 0.
            return toHex.length === 1 ? `0${toHex}` : toHex;
        })
        .join('');

    color = `#${color}`.toUpperCase();

    return color;
};

export default getColor;
