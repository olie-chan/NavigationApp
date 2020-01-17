describe("Running a sample test", () => {
	beforeEach(() => {
		$("~app-root").waitForDisplayed(11000, false)
	});

	it("Should change the page", () => {
		$("~go-to-details-button").click();
	});
});
