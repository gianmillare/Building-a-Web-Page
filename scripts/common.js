function Common() {
    let self = this;
    // Properties
    this.promoBar = {
        promoItems: null;
        currentItem: 0;
        numberOfItems: 0,
    };
}
$(document).ready(function () {
    // Instantiate new Common Class
    app.common = new Common();
})