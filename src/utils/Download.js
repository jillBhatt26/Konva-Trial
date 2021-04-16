const download = (stage, name) => {
    // create a new link
    const link = document.createElement('a');

    // set the href attribute
    link.href = stage.toDataURL();

    // set the download attribute to name
    link.download = name;

    // create and dispatch a mouse event
    const mouseEvent = new MouseEvent('click');

    link.dispatchEvent(mouseEvent);
};

export default download;
