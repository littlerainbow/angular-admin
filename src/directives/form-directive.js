
export default function addArticleDirective() {
    return {
        restrict: 'E',
        template: require('../templates/add-article.html'),
        controller: 'AppCtrl'
    }
}