const windowWidth = window.matchMedia("(min-width: 640px) and (max-width: 800px)");

const blocks = document.getElementsByClassName("block");

const blockOne = document.getElementById("blockOne");
const blockTwo = document.getElementById("blockTwo");
const blockThree = document.getElementById("blockThree");
const blockFour = document.getElementById("blockFour");
const blockFive = document.getElementById("blockFive");
const blockSix = document.getElementById("blockSix");
const blockSeven = document.getElementById("blockSeven");
const blockEight = document.getElementById("blockEight");
const blockNine = document.getElementById("blockNine");
const blockTen = document.getElementById("blockTen");
const blockEleven = document.getElementById("blockEleven");
const blockTwelve = document.getElementById("blockTwelve");
const blockThirteen = document.getElementById("blockThirteen");
const blockFourteen = document.getElementById("blockFourteen");
const blockFifteen = document.getElementById("blockFifteen");
const blockSixteen = document.getElementById("blockSixteen");
const blockSeventeen = document.getElementById("blockSeventeen");
const blockEighteen = document.getElementById("blockEighteen");
const blockNineteen = document.getElementById("blockNineteen");
const blockTwenty = document.getElementById("blockTwenty");
const blockTwentyOne = document.getElementById("blockTwentyOne");

const updateTetrisLayout = (minMaxWidth) => {
    if (minMaxWidth.matches) {
        blocks[3].parentNode.insertBefore(blocks[3], blocks[6]);
        blocks[8].parentNode.insertBefore(blocks[8], blocks[5]);
        blocks[13].parentNode.insertBefore(blocks[13], blocks[10]);
        blocks[14].parentNode.insertBefore(blocks[14], blocks[13]);
        blocks[17].parentNode.insertBefore(blocks[17], blocks[15]);
        blocks[18].parentNode.insertBefore(blocks[18], blocks[17]);

        blocks[20].style.gridColumn = "1 / 3";
    }
    else {
        postContainer.prepend(blockOne);
        blockOne.parentNode.insertBefore(blockTwo, blockOne.nextSibling);
        blockTwo.parentNode.insertBefore(blockThree, blockTwo.nextSibling);
        blockThree.parentNode.insertBefore(blockFour, blockThree.nextSibling);
        blockFour.parentNode.insertBefore(blockFive, blockFour.nextSibling);
        blockFive.parentNode.insertBefore(blockSix, blockFive.nextSibling);
        blockSix.parentNode.insertBefore(blockSeven, blockSix.nextSibling);
        blockSeven.parentNode.insertBefore(blockEight, blockSeven.nextSibling);
        blockEight.parentNode.insertBefore(blockNine, blockEight.nextSibling);
        blockNine.parentNode.insertBefore(blockTen, blockNine.nextSibling);
        blockTen.parentNode.insertBefore(blockEleven, blockTen.nextSibling);
        blockEleven.parentNode.insertBefore(blockTwelve, blockEleven.nextSibling);
        blockTwelve.parentNode.insertBefore(blockThirteen, blockTwelve.nextSibling);
        blockThirteen.parentNode.insertBefore(blockFourteen, blockThirteen.nextSibling);
        blockFourteen.parentNode.insertBefore(blockFifteen, blockFourteen.nextSibling);
        blockFifteen.parentNode.insertBefore(blockSixteen, blockFifteen.nextSibling);
        blockSixteen.parentNode.insertBefore(blockSeventeen, blockSixteen.nextSibling);
        blockSeventeen.parentNode.insertBefore(blockEighteen, blockSeventeen.nextSibling);
        blockEighteen.parentNode.insertBefore(blockNineteen, blockEighteen.nextSibling);
        blockNineteen.parentNode.insertBefore(blockTwenty, blockNineteen.nextSibling);
        blockTwenty.parentNode.insertBefore(blockTwentyOne, blockTwentyOne.nextSibling);

        blockTwentyOne.style.gridColumn = "3 / 4";
    }
};

updateTetrisLayout(windowWidth);
windowWidth.addListener(updateTetrisLayout);