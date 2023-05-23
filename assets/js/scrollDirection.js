

const scrolledUp = "scrolled-up"
const scrolledUpMore = "scrolled-up-more"
const scrolledDown = "scrolled-down"
const scrolledTop = "scrolled-top"
var lastScroll = 0
var scrollThreshold = 0
var scrollTarget

export function listenScrollDirection(element) {

    console.log("listenScrollDirection element is %O", element)

    // Reset body classes
    // We just need to remove the scrolledDown class, specifically
    document.body.classList.remove(scrolledDown)

    // If scroll listener applied previously, we destroy it
    if (scrollTarget) {
        scrollTarget.removeEventListener("scroll", () => { handlePageScroll() })
    }

    // TODO: In case we want to detect scrolling on a child container, we use an if statement like so
    scrollTarget = element ? document.getElementById(element) : document.body

    //scrollElementToWatch = scrollElementToWatch
    
    if (scrollTarget) {
        console.log("Setting scroll listener: %O", scrollTarget)
        scrollTarget.addEventListener("scroll", () => { handlePageScroll() })
    }

    // Add initial class to body (which informs app we're at top)
    document.body.classList.add(scrolledTop)

}


function handlePageScroll() {

    //console.log("scroll happened")
    //let content = document.getElementById(scrollElementToWatch)
    if (scrollTarget) {


        console.log("scroll happened %O", scrollTarget)

        let currentScroll = scrollTarget.scrollTop //window.pageYOffset

        if (currentScroll <= 0) {

            // Top of page
            document.body.classList.add(scrolledUp)
            document.body.classList.add(scrolledTop)
            scrollThreshold = 0

        } else if (currentScroll > lastScroll) {

            // Scrolling down
            //if (scrollThreshold >= 80 && !document.body.classList.contains(scrolledDown)) {
            if (!document.body.classList.contains(scrolledDown)) {
                document.body.classList.remove(scrolledUp)
                document.body.classList.remove(scrolledTop)
                document.body.classList.add(scrolledDown)
                scrollThreshold = 0
            }
        } else if (currentScroll < lastScroll) {

            // Scrolling up
            if (document.body.classList.contains(scrolledDown)) {
                document.body.classList.remove(scrolledDown)
                scrollThreshold = 0
            } else if (scrollThreshold >= 8 || currentScroll <= 0) {
                document.body.classList.add(scrolledUp)
            }

        }

        scrollThreshold = scrollThreshold + 1
        lastScroll = currentScroll
    }
}
// OLD CODE
// Maybe still useful?
/*
function wheelDistance(e) { 

    if (!e) { 
        e = window.event
    } 
    var w = e.wheelDelta, 
        d = e.detail
    if (d) { 
        return -d / 3 // Firefox
    } 

    // IE, Safari, Chrome & other browsers 
    return w / 120
}
*/