const FindTag = function (query, Before, After, plus = 0) {
    let BeforeText = Before
    let AfterText = After
    let Text = ' ' + query;
    let This = Text.indexOf(BeforeText);
    if (This == 0) 
        return '';
    This += BeforeText.length;
    RangeText = Text.indexOf(AfterText, This) - This;
    let ResGetQuery = Text.substr(This, RangeText + plus);

    return ResGetQuery;
}

module.exports = {
    FindTag
}