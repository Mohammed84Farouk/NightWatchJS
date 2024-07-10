module.exports ={
    "Donate to Black Live MAtter": browser =>{
        browser.url("https://blacklivesmatter.com/")
        browser.pause(1 * 1000)

        browser.click("#modal-1-content > ul > li.wp-block-navigation-item.is-style-primary-block.wp-block-navigation-link > a")
        browser.pause(1 * 1000)

        const urgentText = "#contribution_blurb > p:nth-child(2) > strong > i"
        browser.assert.containsText(urgentText, "Fund the Movement");
        browser.pause(2 * 1000)
    }
}