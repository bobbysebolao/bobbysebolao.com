console.log("where this flower blooms");
const windowWidth = window.matchMedia("(min-width: 640px) and (max-width: 800px)");

// console.log("YAAAAAAAAASSSSSSSS", blockO[3]);
// console.log("YAAAAAAAAASSSSSSSS", blockT[0]);

const blocks = document.getElementsByClassName("block");

console.log(blocks[3].parentNode.parentNode, "yeahhh");

const updateTetrisLayout = (minMaxWidth) => {
    if (minMaxWidth.matches) {
        document.body.style.backgroundColor = 'yellow';
        blocks[3].parentNode.insertBefore(blocks[3], blocks[6]);
        blocks[8].parentNode.insertBefore(blocks[8], blocks[5]);
        blocks[13].parentNode.insertBefore(blocks[13], blocks[10]);
        blocks[14].parentNode.insertBefore(blocks[14], blocks[13]);
        blocks[17].parentNode.insertBefore(blocks[17], blocks[15]);
        blocks[18].parentNode.insertBefore(blocks[18], blocks[17]);
        console.log("QPWOEIRIT", blocks[20]);
        blocks[20].style.gridColumn = "1 / 3";
    }
    else {
        document.body.style.backgroundColor = "pink";
    }
};

updateTetrisLayout(windowWidth);
windowWidth.addListener(updateTetrisLayout);