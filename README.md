This website was formerly used for a restaurant called 'The King's Feet', located in Berkeley, CA, and this current version is a rebuild from scratch that is intended to serve as a front-end example of my work, done manually with HTML5, CSS, and javascript (without use of any CSS frameworks).

CURRENT STATE OF THE PAGE, AND CHALLENGES 

As of the last commit, the focus has been on establishing a fully completed and refined homepage, with a plan to refactor and dry up the code. While there are a few repeating patterns between the sections like with fonts and background colors, most of the content within each them varies in layout and responsiveness, and that presents a challenge in creating classes that are relatively straighforward to apply for multiple sections. Additionally, flex is so far the major property influencing the layout, and that has proven to cause some issues with content overflow and collapsing margins that are noticeable in responsiveness. 

SOLUTIONS AND NEXT STEPS

I plan on working with grid layout in at least a couple areas after some more responsiveness testing. The footer and it's content, the navbar, and at least one of the red sections could benefit from the use of grid. Surprisingly, the most apparent issue I've noticed is the second red section of the page, which has only a few elements and seems easy enough to work with, but the collapsing margins while testing the responsiveness of this part of the page has stood out as a problem area. 

I'll also work with writing global variables into the CSS files to help dry up the code there, and may start working with Sass going forward with the rest of the pages. More to come on this-- thank you for checking!

