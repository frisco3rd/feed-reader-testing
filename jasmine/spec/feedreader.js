/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(
  (function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe("RSS Feeds", function() {
      /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /*   
        Loops allFeeds to check if a URL is defined 
         */
      it("url is defined", function() {
        for (let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        }
      });

      /*
            *loops throught allFeeds to check if name is defined
         */
      it("name is defined", function() {
        for (let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        }
      });
    });
    /* New test Suit names "The Menu"*/

    describe("The menu", function() {
      /* New test Suit names "The Menu"*/
      it("element is hidden", function() {
        const menu = document.querySelector("body");
        expect(menu.classList.contains("menu-hidden")).toBe(true);
      });
      /* 
        Tes to check if elemt is hidden by default
         */
      it("changes when clicked", function() {
        const menu = document.querySelector("body");
        const menuLink = document.querySelector(".menu-icon-link");

        menuLink.click();
        expect(menu.classList.contains("menu-hidden")).toBe(false);
        menuLink.click();
        expect(menu.classList.contains("menu-hidden")).toBe(true);
      });
    });
        /*
          * Test to make sure menu displayed and hidden when clicked
          */

    /* New suite called Initial Entries */
    describe("Initial Entries", function() {
      /*
         test to make sure loadfeed function is called and that it has minium one entry
         */
      beforeEach(function(done) {
        loadFeed(0, done);
      });

      it("completes work", function() {
        const feed = document.querySelectorAll('.feed .entry');
        expect(feed.length > 0).toBe(true);
      });
    });

    describe("New Feed Selection", function() {
      const feed = document.querySelector(".feed");
      const firstFeed = [];
      /* Test to make sure a new feed is loaded
     */
      beforeEach(function(done) {
        loadFeed(0);
        Array.from(feed.children).forEach(function(entry) {
          firstFeed.push(entry.innerText);
          loadFeed(1, function(){
              done();
          });
        });
      });

      it("content changes", function() {
        Array.from(feed.children).forEach(function(entry, index) {
          expect(entry.innerText === firstFeed[index]).toBe(false);
        });
      });
    });
  })()
);
