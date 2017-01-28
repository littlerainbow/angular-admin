/**
 * Created by Artsiom_Papou on 1/28/2017.
 */
const articles = {
    template: require("../templates/news-list.html"),
    bindings: {
        articles: '<'
    },
    transclude: true
}
export default articles