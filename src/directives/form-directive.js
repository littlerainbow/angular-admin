
export default function addArticleDirective() {
    return {
        restrict: 'E',
        template: require('../templates/add-article.html'),
        link: function ($scope, elements, attrs) {
            console.log($scope);
        }
    }
}